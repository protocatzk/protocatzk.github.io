import { readdir, readFile } from 'node:fs/promises';
import { join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const dist = fileURLToPath(new URL('../dist/', import.meta.url));
const limit = 1_000_000;

async function walk(dir) {
	const entries = await readdir(dir, { withFileTypes: true });
	const files = [];

	for (const entry of entries) {
		const full = join(dir, entry.name);
		if (entry.isDirectory()) {
			files.push(...(await walk(full)));
		} else {
			files.push(full);
		}
	}

	return files;
}

const files = await walk(dist);
const rows = [];

let total = 0;
let gzipped = 0;

for (const file of files.sort()) {
	const contents = await readFile(file);
	total += contents.byteLength;
	gzipped += gzipSync(contents, { level: 9 }).byteLength;
	rows.push({
		path: relative(dist, file),
		bytes: contents.byteLength,
	});
}

const kb = (bytes) => `${(bytes / 1000).toFixed(1)} kB`;

console.log('\nBuild size');
console.log('──────────────────────────────────────────────');
for (const row of rows) {
	console.log(`${row.path.padEnd(36)} ${kb(row.bytes).padStart(10)}`);
}
console.log('──────────────────────────────────────────────');
console.log(`${'Total'.padEnd(36)} ${kb(total).padStart(10)}`);
console.log(`${'Gzipped (approx.)'.padEnd(36)} ${kb(gzipped).padStart(10)}`);
console.log(`${'Budget'.padEnd(36)} ${kb(limit).padStart(10)}`);
console.log(`Status: ${total < limit ? 'OK' : 'TOO LARGE'} (${((total / limit) * 100).toFixed(1)} %)\n`);

if (total >= limit) {
	console.error(`The build exceeds the ${kb(limit)} budget.`);
	process.exit(1);
}
