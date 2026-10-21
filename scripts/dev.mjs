#!/usr/bin/env node
// Starts the GitHub stats function and Vite together, so `/api` works with a
// plain `npm run dev`. Each process keeps its own output; closing either one
// stops the other.
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const apiPort = process.env.DEV_API_PORT ?? '8787';
const viteBin = fileURLToPath(new URL('../node_modules/vite/bin/vite.js', import.meta.url));

const children = [
  spawn(process.execPath, ['--env-file-if-exists=.env.local', 'scripts/dev-api.mjs'], {
    stdio: 'inherit',
    env: { ...process.env, DEV_API_PORT: apiPort },
  }),
  spawn(process.execPath, [viteBin, ...process.argv.slice(2)], {
    stdio: 'inherit',
    env: {
      ...process.env,
      DEV_API_PROXY: process.env.DEV_API_PROXY ?? `http://127.0.0.1:${apiPort}`,
    },
  }),
];

let stopping = false;

function shutdown(code) {
  if (stopping) return;
  stopping = true;
  for (const child of children) child.kill('SIGTERM');
  process.exit(code);
}

process.on('SIGINT', () => shutdown(0));
process.on('SIGTERM', () => shutdown(0));

for (const child of children) {
  child.on('exit', (code) => shutdown(code ?? 0));
  child.on('error', () => shutdown(1));
}
