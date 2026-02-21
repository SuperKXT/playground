import { expect, expectTypeOf, test } from "vitest";

import { caloriesCost } from "./calories-cost.js";

import type { Utils } from "../../types/utils.types.js";

test("testing caloriesCost against test 1", () => {
	const calories = [200, 400, 600, 800];
	const prices = [50, 60, 80, 100];
	const dailyGoal = 1200;

	const result = caloriesCost(calories, prices, dailyGoal);
	const expected = 160;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
