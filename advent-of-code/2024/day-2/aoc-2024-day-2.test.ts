import { readFile } from "node:fs/promises";
import path from "node:path";

import { expect, test } from "vitest";

import { aoc2024Day2 } from "./aoc-2024-day-2.js";

import { config } from "../../../config.js";

const dirname = path.join(config.dirname, "advent-of-code", "2024", "day-2");
test("testing aoc-2024-day-2", async () => {
	const sample = await readFile(path.join(dirname, "sample.txt"), "utf-8");
	const sampleRes = aoc2024Day2(sample);
	expect(sampleRes.safeCount).toBe(2);
	expect(sampleRes.adjustedSafeCount).toBe(4);

	const input = await readFile(path.join(dirname, "input.txt"), "utf-8");
	const response = aoc2024Day2(input);
	expect(response.safeCount).toBe(510);
	expect(response.adjustedSafeCount).toBe(510);
});
