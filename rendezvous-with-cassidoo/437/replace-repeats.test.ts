import { expect, expectTypeOf, test } from "vitest";

import { replaceRepeats } from "./replace-repeats.js";

test("testing replaceRepeats against test 1", () => {
	const result = replaceRepeats("1234500362000440", 0);
	const expected = "1234523623441" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing replaceRepeats against test 2", () => {
	const result = replaceRepeats("000000000000", 0);
	const expected = "12" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing replaceRepeats against test 3", () => {
	const result = replaceRepeats("123456789", 1);
	const expected = "123456789" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
