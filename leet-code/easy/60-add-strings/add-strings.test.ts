import { expect, expectTypeOf, test } from "vitest";

import { addStrings } from "./add-strings.js";

test("testing addStrings for test 1", () => {
	const result = addStrings("11", "123");
	const expected = "134" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing addStrings for test 2", () => {
	const result = addStrings("456", "77");
	const expected = "533" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing addStrings for test 3", () => {
	const result = addStrings("0", "0");
	const expected = "0" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing addStrings for test 4", () => {
	const result = addStrings("15654546454", "54645645415");
	const expected = "70300191869" as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
