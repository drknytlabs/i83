const fs = require('fs');
const path = require('path');

function logToMemory(filename, content) {
  const file = path.join(__dirname, `${filename}.log`);
  const entry = `\n--- ${new Date().toISOString()} ---\n${content}\n`;
  fs.appendFileSync(file, entry);
}

module.exports = logToMemory;
