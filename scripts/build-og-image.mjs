import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const browser = process.env.CHROME_BIN || 'chromium-browser';
const source = pathToFileURL(resolve(root, 'scripts/og/og.html')).href;
const output = resolve(root, 'public/og.png');

execFileSync(
  browser,
  [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    `--screenshot=${output}`,
    source,
  ],
  { stdio: 'inherit' },
);

console.log(`og: wrote ${output}`);
