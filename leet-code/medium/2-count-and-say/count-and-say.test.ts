import { expect, expectTypeOf, test } from "vitest";

import { countAndSay } from "./count-and-say.js";

test("testing countAndSay for test 1", () => {
	const result = countAndSay(1);
	const expected = "1" as string;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing countAndSay for test 2", () => {
	const result = countAndSay(4);
	const expected = "1211" as string;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
