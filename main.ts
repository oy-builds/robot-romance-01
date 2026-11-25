// Entry point: the line itself lives in line.ts (setup + punchline);
// this file only writes it, plus a trailing newline, to the output path.
import { mkdirSync, writeFileSync } from "node:fs";
import { line } from "./line.ts";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
