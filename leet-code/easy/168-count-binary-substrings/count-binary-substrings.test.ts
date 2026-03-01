import { expect, expectTypeOf, test } from "vitest";

import { countBinarySubstrings } from "./count-binary-substrings.js";

test("testing countBinarySubstrings for test 1", () => {
	const result = countBinarySubstrings("00110011");
	const expected = 6 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing countBinarySubstrings for test 2", () => {
	const result = countBinarySubstrings("10101");
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
