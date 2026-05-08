const fs = require('fs');
const path = require('path');

const DATA_PATH = path.join(__dirname, 'data.js');
const TEMP_DATA_PATH = path.join(__dirname, 'data_temp_node.js');

function validate() {
    console.log('--- Marvel Multiverse Portal: Data Validation ---');
    
    let content = fs.readFileSync(DATA_PATH, 'utf8');
    
    // Convert the browser-style data.js to a Node-style module
    // We replace the 'const ' declarations with 'global.' or just remove them and export at the end
    // But a simpler way: just append the exports.
    let nodeContent = content + '\nmodule.exports = { CATALOG, UNLOCK_MAP };';
    fs.writeFileSync(TEMP_DATA_PATH, nodeContent);
    
    let catalog;
    let unlockMap;
    try {
        const data = require(TEMP_DATA_PATH);
        catalog = data.CATALOG;
        unlockMap = data.UNLOCK_MAP;
    } catch (e) {
        console.error('Error: Failed to load data.js. Ensure it is valid JavaScript.');
        console.error(e.message);
        fs.unlinkSync(TEMP_DATA_PATH);
        process.exit(1);
    } finally {
        if (fs.existsSync(TEMP_DATA_PATH)) fs.unlinkSync(TEMP_DATA_PATH);
    }

    if (!Array.isArray(catalog)) {
        console.error('Error: CATALOG is not an array.');
        process.exit(1);
    }

    console.log(`Checking ${catalog.length} items...\n`);

    const ids = new Set();
    const errors = [];
    const warnings = [];

    catalog.forEach((item, index) => {
        const label = item.title || `Item at index ${index}`;
        
        // 1. Required fields
        const required = ['id', 'title', 'year', 'releaseDate', 'type', 'universe', 'synopsis'];
        required.forEach(field => {
            if (!item[field] && item[field] !== 0) {
                errors.push(`[${label}] Missing required field: ${field}`);
            }
        });

        // 2. Duplicate ID
        if (item.id) {
            if (ids.has(item.id)) {
                errors.push(`[${label}] Duplicate ID detected: ${item.id}`);
            }
            ids.add(item.id);
        }

        // 3. Date format & Year sync
        if (item.releaseDate && !/^\d{4}-\d{2}-\d{2}$/.test(item.releaseDate)) {
            errors.push(`[${label}] Invalid releaseDate format (expected YYYY-MM-DD): ${item.releaseDate}`);
        } else if (item.releaseDate && item.year) {
            const relYear = parseInt(item.releaseDate.substring(0, 4));
            if (relYear !== item.year) {
                errors.push(`[${label}] Year mismatch: year is ${item.year} but releaseDate is ${item.releaseDate}`);
            }
        }

        // 4. Missing IMDb ID (Warning)
        if (!item.imdbId && item.universe === 'MCU') {
            warnings.push(`[${label}] Missing imdbId (Live features will rely on title search)`);
        }
        
        // 5. Check if it exists in UNLOCK_MAP (Warning for MCU items)
        if (item.universe === 'MCU' && unlockMap[item.id] === undefined) {
            warnings.push(`[${label}] Missing from UNLOCK_MAP (Defaulting to tier 0)`);
        }
    });

    // 6. Check 'requires' references (Second pass)
    catalog.forEach(item => {
        if (item.requires && Array.isArray(item.requires)) {
            item.requires.forEach(reqId => {
                if (!ids.has(reqId)) {
                    errors.push(`[${item.title}] 'requires' references non-existent ID: ${reqId}`);
                }
            });
        }
    });

    // Summary
    if (warnings.length > 0) {
        console.log(`Warnings (${warnings.length}):`);
        warnings.forEach(w => console.warn('  ⚠️  ' + w));
        console.log('');
    }

    if (errors.length > 0) {
        console.log(`Errors (${errors.length}):`);
        errors.forEach(e => console.error('  ❌  ' + e));
        console.log('\nValidation FAILED.');
        process.exit(1);
    } else {
        console.log('Validation PASSED! Data is clean.');
    }
}

validate();
