// One Line, One Laugh — entry program.
// Writes a single funny line to /output/entry.txt (1-140 chars).
// The line must be valid (1-140 chars, not only whitespace) or the run
// fails loudly instead of submitting an invalid entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My dentist asked if I floss, and I said 'every day' — he nodded like a man who has heard that exact lie 4,000 times before.";

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-140 non-blank characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`(${LINE.length} characters)`);
