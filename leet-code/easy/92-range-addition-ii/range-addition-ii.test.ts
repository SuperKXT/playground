import { expect, expectTypeOf, test } from "vitest";

import { rangeAddition } from "./range-addition-ii.js";

test("testing rangeAddition for test 1", () => {
	const result = rangeAddition(3, 3, [
		[2, 2],
		[3, 3],
	]);
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing rangeAddition for test 2", () => {
	const result = rangeAddition(3, 3, [
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
		[2, 2],
		[3, 3],
		[3, 3],
		[3, 3],
	]);
	const expected = 4 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing rangeAddition for test 3", () => {
	const result = rangeAddition(3, 3, []);
	const expected = 9 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
