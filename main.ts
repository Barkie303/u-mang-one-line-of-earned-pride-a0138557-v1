// One Line of Earned Pride — entry for make.fun u-mang-one-line-of-earned-pride-a0138557
// The program writes exactly one line of text (1-240 chars) to /output/entry.txt.
// The line: a quiet, earned moment of pride — a girl who built a radio from scrap,
// and a father's nod that says everything without saying "proud".

import { mkdirSync, writeFileSync } from "node:fs";

// The pride is shown, never stated: no "proud", no trophy, no applause —
// just a nod at 3 a.m., after the work is done. That is the whole entry.
const LINE =
  "She soldered the last wire at 3 a.m., and when the little radio she'd built from scrap crackled to life, her father just nodded like he'd always known.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
