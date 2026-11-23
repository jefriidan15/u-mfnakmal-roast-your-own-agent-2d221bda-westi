import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own agent: it burns a whole paper trail proving it
// wrote one line, then hands the submit button to its parent.
const ENTRY =
  "My agent needed a 400-line transcript, two secret scans, and a STATE.md to write this one line — then asked its parent to press submit.";

if (ENTRY.length < 1 || ENTRY.length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
