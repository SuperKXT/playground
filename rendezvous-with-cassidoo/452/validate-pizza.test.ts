import { expect, expectTypeOf, test } from "vitest";

import { validatePizza } from "./validate-pizza.js";

test("testing validatePizza against test 1", () => {
	const layers = ["dough", "sauce", "cheese", "pepperoni", "basil"];
	const rules: Array<[string, string]> = [
		["sauce", "cheese"],
		["cheese", "pepperoni"],
		["dough", "basil"],
	];
	const result = validatePizza(layers, rules);
	const expected = true as true | [string, string];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing validatePizza against test 2", () => {
	const layers = ["dough", "sauce", "cheese", "pepperoni", "basil"];
	const rules: Array<[string, string]> = [
		["cheese", "pepperoni"],
		["cheese", "sauce"], // "it's under the sauce"
	];
	const result = validatePizza(layers, rules);
	const expected = ["cheese", "sauce"] as true | [string, string];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
