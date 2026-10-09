#!/usr/bin/env node
import { createServer } from 'node:http';
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const port = Number(process.env.DEV_API_PORT ?? 8787);
const directory = await mkdtemp(join(tmpdir(), 'portfolio-api-'));
const outfile = join(directory, 'handler.mjs');

await build({
  entryPoints: ['api/github.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  outfile,
  logLevel: 'error',
});

const { default: handler } = await import(pathToFileURL(outfile).href);

createServer(async (request, response) => {
  const url = new URL(request.url ?? '/', `http://127.0.0.1:${port}`);
  const res = {
    statusCode: 200,
    headers: {},
    setHeader(name, value) {
      this.headers[name] = value;
    },
    end(body) {
      response.writeHead(this.statusCode, this.headers);
      response.end(body);
    },
  };

  try {
    await handler({ method: request.method, query: Object.fromEntries(url.searchParams) }, res);
  } catch (error) {
    response.writeHead(500, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ error: 'dev_api_failed', message: String(error) }));
  }
}).listen(port, '127.0.0.1', () => {
  console.log(`api dev server → http://127.0.0.1:${port}/api/github?username=fernandoleitepagani`);
});
