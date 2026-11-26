import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Liner Groan-Off — one original dad joke, one line, 75 characters.
// Setup: the robot vacuum ate a sock. Turn: "clean up my act" — the pun lands
// in the last five words, so the whole line reads aloud in a single breath.
const LINE =
  "Our robot vacuum ate my sock \u2014 I guess it's just trying to clean up my act.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
