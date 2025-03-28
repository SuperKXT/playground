import { readFile } from "node:fs/promises";
import path from "node:path";

import { expect, test } from "vitest";

import { pathfinder } from "./pathfinder.js";

import { config } from "../../../config.js";

/** cSpell: disable */
const EXAMPLE = [
	"Sabqponm",
	"abcryxxl",
	"accszExk",
	"acctuvwj",
	"abdefghi",
].join("\n");
/** cSpell: enable */

type TSolution = ReturnType<typeof pathfinder>;
test("testing pathFinder against example input", () => {
	const response = pathfinder(EXAMPLE);
	const solution: TSolution = {
		fewestSteps: 0,
		part2: 0,
	};
	expect(response).toStrictEqual(solution);
});

test("testing pathFinder against real input", async () => {
	const input = await readFile(path.join(config.dirname, "input.txt"), "utf-8");
	const solution: TSolution = {
		fewestSteps: 0,
		part2: 0,
	};
	expect(pathfinder(input)).toStrictEqual(solution);
});
