// fix-md-encoding.js
// Run this script with: node fix-md-encoding.js
// It will convert all .md files in the 'content' folder to UTF-8 encoding.

const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content');

fs.readdirSync(contentDir).forEach(file => {
  if (file.endsWith('.md')) {
    const filePath = path.join(contentDir, file);
    // Read as UTF-16LE (default from PowerShell echo)
    const raw = fs.readFileSync(filePath, 'utf16le');
    // Write as UTF-8
    fs.writeFileSync(filePath, raw, 'utf8');
    console.log(`Converted ${file} to UTF-8.`);
  }
});
console.log('All markdown files have been converted to UTF-8.'); 