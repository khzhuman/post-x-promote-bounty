// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, stdlib only).
//
// The entry itself is the X post: one post of our own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, with a photo of its own attached, make.fun or the @makefunai
// tag and our play code in its text. POST.json names that post; the house reads
// its replies, reposts and quotes from X and scores them.
//
// This program's only job is to hand POST.json to the grader: it copies the
// file from the repository root into the output directory, where the gate
// reads it. Nothing it writes about the post is scored.
//
// POST.json currently holds a placeholder address. It is replaced with the
// real post address (from X's Share button, Copy link) once the post is live,
// before the entry is submitted.
//
// Local run, the way the grader does it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
