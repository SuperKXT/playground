import { expect, expectTypeOf, test } from "vitest";

import { countBinarySubstrings } from "./count-binary-substrings.js";

test("testing countBinarySubstrings for test 1", () => {
	const result = countBinarySubstrings("00110011");
	const expected = 6 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing countBinarySubstrings for test 2", () => {
	const result = countBinarySubstrings("10101");
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing countBinarySubstrings for test 3", () => {
	const result = countBinarySubstrings("000111");
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing countBinarySubstrings for test 4", () => {
	const result = countBinarySubstrings("00111");
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
