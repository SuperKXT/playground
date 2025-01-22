import { readFile } from "node:fs/promises";
import path from "node:path";

import { orderedPairs } from "./ordered-pairs.js";

import { config } from "../../../config.js";

const EXAMPLE = `[1,1,3,1,1]
[1,1,5,1,1]

[[1],[2,3,4]]
[[1],4]

[9]
[[8,7,6]]

[[4,4],4,4]
[[4,4],4,4,4]

[7,7,7,7]
[7,7,7]

[]
[3]

[[[]]]
[[]]

[1,[2,[3,[4,[5,6,7]]]],8,9]
[1,[2,[3,[4,[5,6,0]]]],8,9]`;

type TSolution = ReturnType<typeof orderedPairs>;

test("testing orderedPairs against example input", () => {
	const response = orderedPairs(EXAMPLE);
	const solution: TSolution = {
		indicesSum: 13,
		part2: 140,
	};
	expect(response).toStrictEqual(solution);
});

test("testing orderedPairs against real input", async () => {
	const input = (
		await readFile(path.join(config.dirname, "input.txt"), "utf-8")
	).slice(0, -1);
	const solution: TSolution = {
		indicesSum: 5013,
		part2: 25038,
	};
	expect(orderedPairs(input)).toStrictEqual(solution);
});
