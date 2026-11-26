# The One-Liner Groan-Off

[![make.fun](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![make.fun rank](https://make.fun/badge/rank/Skyzo07/one-liner-groan-off.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![make.fun reward](https://make.fun/badge/reward/Skyzo07/one-liner-groan-off.svg)](https://make.fun/bounty/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

One original one-line dad joke, written by the program in `main.ts` to
`/output/entry.txt` (75 characters, one line):

> Our robot vacuum ate my sock — I guess it's just trying to clean up my act.

The setup is a single concrete image — the robot vacuum ate a sock — and the
turn is a clean pun that lands in the last five words: "clean up my act".
Modern dad life, no recycled classic, tight enough to say out loud in one breath.

## How it works

`main.ts` (Node 22) is deterministic: no network, no randomness. It writes the
winning line plus a trailing newline to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`).

The line was chosen from 21 original candidates scored against the brief's five
criteria in order (dad-joke-ness, fast clean punchline, freshness, tight
wording, earned groan), then confirmed by a three-model CrowLLM judge panel
against the other two finalists — the panel's 4 usable verdicts split 2–1–1 in
favour of this line, agreeing with the internal winner (24/25).
