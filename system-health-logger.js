// System Health & Path Logger
// Uses only the built-in `os` and `path` modules.
// Usage: node system-health-logger.js [file-path]

const os = require('os');
const path = require('path');

// ---------- Helpers ----------
const toGB = (bytes) => (bytes / 1024 ** 3).toFixed(2);
const LINE = '='.repeat(52);
const THIN = '-'.repeat(52);
const row = (label, value) => console.log(`  ${label.padEnd(18)}: ${value}`);

function memoryBar(percentFree, width = 30) {
  const filled = Math.round((percentFree / 100) * width);
  return '[' + '#'.repeat(filled) + '.'.repeat(width - filled) + ']';
}

// ---------- Memory details (os module) ----------
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const freePercent = (freeMem / totalMem) * 100;

// ---------- File path details (path module) ----------
const filePath = process.argv[2] || '/var/logs/system/diagnostics.log';
const fileName = path.basename(filePath);
const fileExt = path.extname(filePath);
const folder = path.dirname(filePath);

// ---------- Output ----------
console.log('\n' + LINE);
console.log('        SYSTEM HEALTH & PATH LOGGER');
console.log(LINE);

console.log('\n  [ SYSTEM INFO ]');
console.log(THIN);
row('Operating System', `${os.type()} (${os.platform()})`);
row('Hostname', os.hostname());

console.log('\n  [ MEMORY ]');
console.log(THIN);
row('Total Memory', `${toGB(totalMem)} GB`);
row('Used Memory', `${toGB(usedMem)} GB`);
row('Free Memory', `${toGB(freeMem)} GB`);
row('Free Memory %', `${freePercent.toFixed(2)}%`);
row('Free Bar', `${memoryBar(freePercent)} ${freePercent.toFixed(0)}% free`);

console.log('\n  [ LOG FILE PATH ]');
console.log(THIN);
row('Full Path', filePath);
row('Folder', folder);
row('File Name', fileName);
row('File Extension', fileExt || '(none)');

console.log('\n' + LINE + '\n');
