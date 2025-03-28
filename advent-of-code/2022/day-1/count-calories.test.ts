import { expect, test } from "vitest";

import { countCalories } from "./count-calories.js";

import type { TCountCaloriesSolution } from "./count-calories.js";

test("testing countCalories", async () => {
	const response = await countCalories();
	const solution: TCountCaloriesSolution = {
		maxCalories: 69626,
		maxIndex: 229,
		topThreeCalories: 206780,
		topThreeIndexes: [229, 178, 213],
	};
	expect(response).toStrictEqual(solution);
});
