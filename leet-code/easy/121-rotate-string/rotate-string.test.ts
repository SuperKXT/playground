import { expect, expectTypeOf, test } from "vitest";

import { rotateString } from "./rotate-string.js";

test("testing rotateString for test 1", () => {
	const result = rotateString("abcde", "cdeab"); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing rotateString for test 2", () => {
	const result = rotateString("abcde", "abced"); // cSpell: disable-line
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing rotateString for test 3", () => {
	const result = rotateString("defdefdefabcabc", "defdefabcabcdef"); // cSpell: disable-line
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
