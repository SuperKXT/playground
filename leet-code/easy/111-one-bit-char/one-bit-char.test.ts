import { expect, expectTypeOf, test } from "vitest";

import { oneBitChar } from "./one-bit-char.js";

test("testing oneBitChar for test 1", () => {
	const result = oneBitChar([1, 0, 0]);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing oneBitChar for test 2", () => {
	const result = oneBitChar([1, 1, 1, 0]);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
