import { assertType, expect, test } from "vitest";

import { calculateIngredients } from "./calculate-ingredients.js";

test("testing calculateIngredients against test 1", () => {
	const ingredients = [
		{ name: "flour", amount: 200 }, // 200g per
		{ name: "sugar", amount: 100 }, // 100g per
		{ name: "eggs", amount: 2 }, // 2 eggs per
	];
	const targetServings = 3;
	const result = calculateIngredients(ingredients, targetServings);
	const expected = [
		{ name: "flour", amount: 600 },
		{ name: "sugar", amount: 300 },
		{ name: "eggs", amount: 6 },
	];
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});
