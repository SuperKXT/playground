import { assertType, expect, test } from "vitest";

import { oddSum } from "./odd-sum.js";

test("testing addOperators against test 1", () => {
	const result = oddSum([9, 14, 6, 2, 11], [8, 4, 7, 20]);
	const expected = [
		[9, 20],
		[14, 7],
		[11, 8],
	] as [number, number][];
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing addOperators against test 2", () => {
	const result = oddSum([2, 4, 6, 8], [10, 12, 14]);
	const expected = [] as [number, number][];
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});
