import { copyFile, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = path.join(root, 'dist');
// Only these approved public files may enter the deployment.
const publicFiles = [
  'index.html',
  'assets/bandeja-cruz-principal.webp',
  'assets/bandeja-cruz-secundaria.webp',
];
await rm(output, { recursive: true, force: true });
for (const file of publicFiles) {
  const target = path.join(output, file);
  await mkdir(path.dirname(target), { recursive: true });
  await copyFile(path.join(root, 'demo', file), target);
}
console.log('Catálogo preparado em dist/: uma página e duas imagens aprovadas.');
