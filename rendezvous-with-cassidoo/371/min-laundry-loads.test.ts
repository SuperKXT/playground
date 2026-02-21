import { expect, expectTypeOf, test } from "vitest";

import { minLaundryLoads } from "./min-laundry-loads.js";

test("testing waysToScore against test 1", () => {
	const result = minLaundryLoads([
		["red", "normal"],
		["blue", "normal"],
		["red", "delicate"],
		["blue", "heavy"],
	]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing waysToScore against test 2", () => {
	const result = minLaundryLoads([
		["white", "normal"],
		["white", "delicate"],
		["white", "normal"],
		["white", "heavy"],
	]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
