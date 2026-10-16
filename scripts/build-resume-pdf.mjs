import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'public/resume');
mkdirSync(outDir, { recursive: true });

const browser = process.env.CHROME_BIN || 'chromium-browser';

const jobs = [
  ['scripts/resume/resume-en.html', 'fernando-leite-pagani-resume-en.pdf'],
  ['scripts/resume/resume-pt.html', 'fernando-leite-pagani-resume-pt.pdf'],
];

for (const [source, output] of jobs) {
  const sourceUrl = pathToFileURL(resolve(root, source)).href;
  const outputPath = resolve(outDir, output);
  execFileSync(
    browser,
    [
      '--headless=new',
      '--no-sandbox',
      '--disable-gpu',
      '--no-pdf-header-footer',
      `--print-to-pdf=${outputPath}`,
      sourceUrl,
    ],
    { stdio: 'inherit' },
  );
  console.log(`resume: wrote ${outputPath}`);
}
