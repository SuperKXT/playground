import { expect, test } from "vitest";

import { rucksackReorganization } from "./rucksack-reorganization.js";

const INPUT = [
	/** cSpell: disable */
	"vJrwpWtwJgWrhcsFMMfFFhFp",
	"jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
	"PmmdzqPrVvPwwTWBwg",
	"wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
	"ttgJtRGJQctTZtZT",
	"CrZsJsPPZsGzwwsLwLmpwMDw",
	/** cSpell: enable */
].join("\n");

type TSolution = Awaited<ReturnType<typeof rucksackReorganization>>;
test("testing rucksackReorganization against example input", async () => {
	const response = await rucksackReorganization(INPUT);
	const solution: TSolution = {
		badgePriority: 70,
		commonPriority: 157,
	};
	expect(response).toStrictEqual(solution);
});

test("testing rucksackReorganization against actual input", async () => {
	const response = await rucksackReorganization();
	const solution: TSolution = {
		badgePriority: 2689,
		commonPriority: 8176,
	};
	expect(response).toStrictEqual(solution);
});
