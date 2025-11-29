import { assertType, expect, test } from "vitest";

import { mealPrepTasks } from "./meal-prep-tasks.js";

import type { Utils } from "../../types/utils.types.js";

test("testing mealPrepTasks against test 1", () => {
	const result = mealPrepTasks([
		["Make Gravy", 10, 11],
		["Prep Salad", 12, 13],
		["Mash Potatoes", 11, 12],
		["Bake Rolls", 11, 13],
	]);
	const expected: ReturnType<typeof mealPrepTasks> = {
		count: 3,
		chosen: ["Make Gravy", "Mash Potatoes", "Prep Salad"],
	};
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
