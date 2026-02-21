import { expect, expectTypeOf, test } from "vitest";

import { firstUniqueChar } from "./first-unique-char.js";

test("testing firstUniqueChar for test 1", () => {
	const result = firstUniqueChar("leetcode"); // cSpell: disable-line
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing firstUniqueChar for test 2", () => {
	const result = firstUniqueChar("loveleetcode"); // cSpell: disable-line
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing firstUniqueChar for test 3", () => {
	const result = firstUniqueChar("aabb"); // cSpell: disable-line
	const expected = -1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing firstUniqueChar for test 4", () => {
	const result = firstUniqueChar("aadadaadz"); // cSpell: disable-line
	const expected = 8 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing firstUniqueChar for test 5", () => {
	const result = firstUniqueChar("aadadaad"); // cSpell: disable-line
	const expected = -1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
