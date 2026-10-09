#!/usr/bin/env node
import { mkdtemp } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';

const base = (process.argv[2] ?? 'http://localhost:3000').replace(/\/+$/, '');
const username = process.env.GITHUB_USER ?? 'fernandoleitepagani';

let failures = 0;
const check = (label, condition, detail = '') => {
  const ok = Boolean(condition);
  if (!ok) failures += 1;
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? ` — ${detail}` : ''}`);
};

console.log(`\nGitHub API contract check → ${base}\n`);

const response = await fetch(`${base}/api/github?username=${username}`);
const cache = response.headers.get('cache-control') ?? '';
const body = await response.json().catch(() => null);

if (response.status === 503) {
  console.log('Hint: the function answered 503. Either GITHUB_TOKEN is missing from the');
  console.log('running server, or GitHub rejected it.\n');
}

check('GET /api/github?username=… → 200', response.status === 200, `status ${response.status}`);
check('CDN cache header present', /s-maxage=\d+/.test(cache), cache || '(missing)');
check(
  'counters are integers',
  ['public_repos', 'followers', 'following'].every((key) => Number.isInteger(body?.[key])),
  JSON.stringify({
    public_repos: body?.public_repos,
    followers: body?.followers,
    following: body?.following,
  }),
);
check(
  'contribution counters are integers',
  [
    'total',
    'commits',
    'issues',
    'pullRequests',
    'reviews',
    'restricted',
    'currentStreak',
    'longestStreak',
  ].every((key) => Number.isInteger(body?.contributions?.[key])),
  JSON.stringify(body?.contributions),
);
check(
  'longest streak ≥ current streak',
  body?.contributions?.longestStreak >= body?.contributions?.currentStreak,
);

const calendar = body?.calendar ?? [];
check('calendar covers ~1 year', calendar.length >= 350, `${calendar.length} days`);
check(
  'calendar starts on a Sunday',
  calendar[0]?.date && new Date(`${calendar[0].date}T00:00:00`).getDay() === 0,
  calendar[0]?.date,
);
check(
  'calendar days have { date, count }',
  calendar.every((day) => typeof day?.date === 'string' && Number.isInteger(day?.count)),
);

const languages = body?.languages ?? [];
const hidden = ['Assembly', 'HTML', 'CSS'];
check(
  'languages sorted by bytes, percent within 0–100',
  languages.length > 0 &&
    languages.every((lang, index, all) => index === 0 || all[index - 1].bytes >= lang.bytes) &&
    languages.every((lang) => lang.percent > 0 && lang.percent <= 100),
  languages.map((lang) => `${lang.name} ${lang.percent}%`).join(', '),
);
check(
  'filtered languages are absent',
  !languages.some((lang) => hidden.includes(lang.name)),
  `hidden: ${hidden.join(', ')}`,
);

const repos = body?.repos ?? [];
check('repos is a non-empty list', repos.length > 0, `${repos.length} repos`);
check(
  'repos expose name, url and counters',
  repos.every(
    (repo) =>
      typeof repo?.name === 'string' &&
      typeof repo?.url === 'string' &&
      Number.isInteger(repo?.stars) &&
      Number.isInteger(repo?.forks) &&
      Array.isArray(repo?.topics),
  ),
);
check(
  'repos ordered by pushedAt (newest first)',
  repos.every(
    (repo, index, all) =>
      index === 0 || new Date(all[index - 1].pushedAt) >= new Date(repo.pushedAt),
  ),
);

if (response.status === 200) {
  const post = await fetch(`${base}/api/github`, { method: 'POST' });
  check('POST → 405', post.status === 405, `status ${post.status}`);

  const other = await fetch(`${base}/api/github?username=torvalds`);
  check('unknown username → 403', other.status === 403, `status ${other.status}`);

  const directory = await mkdtemp(join(tmpdir(), 'portfolio-merge-'));
  await build({
    entryPoints: ['src/data/projects.ts'],
    bundle: true,
    platform: 'node',
    format: 'esm',
    outfile: join(directory, 'projects.mjs'),
    logLevel: 'error',
  });
  const { mergeProjects } = await import(pathToFileURL(join(directory, 'projects.mjs')).href);
  const merged = mergeProjects(repos);
  check('merge keeps curated projects missing from the API', merged.length >= 5, `${merged.length} cards`);
  check(
    'merge attaches stars, forks and pushedAt to API repos',
    merged.some((project) => typeof project.stars === 'number' && typeof project.pushedAt === 'string'),
  );
}

console.log(`\n${failures === 0 ? '✅ endpoint OK' : `❌ ${failures} check(s) failed`}\n`);
process.exit(failures === 0 ? 0 : 1);
