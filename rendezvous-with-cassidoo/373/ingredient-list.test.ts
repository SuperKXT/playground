import { expect, expectTypeOf, test } from "vitest";

import { ingredientList } from "./ingredient-list.js";

test("testing ingredientList", () => {
	const result1 = ingredientList({
		recipe: ["eggs", "flour", "sugar", "butter"],
		pantry: ["sugar", "butter", "milk"],
	});
	const expected1 = 2 as const;

	expect(result1).toStrictEqual(expected1);

	expectTypeOf(result1).toEqualTypeOf(expected1);
});
