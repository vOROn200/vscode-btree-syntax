// Generates syntaxes/btree.tmLanguage.json from syntaxes/btree.tmLanguage.yaml.
// Usage: node scripts/build-grammar.js [--check]
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const src = path.join(__dirname, '..', 'syntaxes', 'btree.tmLanguage.yaml');
const dst = path.join(__dirname, '..', 'syntaxes', 'btree.tmLanguage.json');

const grammar = yaml.load(fs.readFileSync(src, 'utf8'), { filename: src });
const json = JSON.stringify(grammar, null, 2) + '\n';

if (process.argv.includes('--check')) {
  const current = fs.existsSync(dst) ? fs.readFileSync(dst, 'utf8') : '';
  if (current !== json) {
    console.error(`${path.relative(process.cwd(), dst)} is out of date. Run: npm run build:grammar`);
    process.exit(1);
  }
  console.log('Grammar JSON is up to date.');
} else {
  fs.writeFileSync(dst, json);
  console.log(`Wrote ${path.relative(process.cwd(), dst)}`);
}
