import { expect, expectTypeOf, test } from "vitest";

import { minIndexSum } from "./min-index-sum.js";

test("testing minIndexSum for test 1", () => {
	const result = minIndexSum(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		[
			"Piatti", // cSpell: disable-line
			"The Grill at Torrey Pines", // cSpell: disable-line
			"Hungry Hunter Steakhouse",
			"Shogun",
		],
	);
	const expected = ["Shogun"];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing minIndexSum for test 2", () => {
	const result = minIndexSum(
		["Shogun", "Tapioca Express", "Burger King", "KFC"],
		["KFC", "Shogun", "Burger King"],
	);
	const expected = ["Shogun"];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing minIndexSum for test 3", () => {
	const result = minIndexSum(
		["happy", "sad", "good"],
		["sad", "happy", "good"],
	);
	const expected = ["happy", "sad"];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing minIndexSum for test 4", () => {
	const result = minIndexSum(
		["Shogun", "Piatti", "Tapioca Express", "Burger King", "KFC"], // cSpell: disable-line
		[
			"Piatti", // cSpell: disable-line
			"The Grill at Torrey Pines", // cSpell: disable-line
			"Hungry Hunter Steakhouse",
			"Shogun",
		],
	);
	const expected = ["Piatti"]; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
