import { expect, expectTypeOf, test } from "vitest";

import { shiftGrid } from "./shift-grid.js";

test("testing shiftGrid for test 1", () => {
	const result = shiftGrid(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		1,
	);
	const expected = [
		[9, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing shiftGrid for test 2", () => {
	const result = shiftGrid(
		[
			[3, 8, 1, 9],
			[19, 7, 2, 5],
			[4, 6, 11, 10],
			[12, 0, 21, 13],
		],
		4,
	);
	const expected = [
		[12, 0, 21, 13],
		[3, 8, 1, 9],
		[19, 7, 2, 5],
		[4, 6, 11, 10],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing shiftGrid for test 3", () => {
	const result = shiftGrid(
		[
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
		],
		9,
	);
	const expected = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
