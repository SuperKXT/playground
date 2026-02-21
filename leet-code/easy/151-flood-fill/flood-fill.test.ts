import { expect, expectTypeOf, test } from "vitest";

import { floodFill } from "./flood-fill.js";

test("testing floodFill for test 1", () => {
	const result = floodFill(
		[
			[1, 1, 1],
			[1, 1, 0],
			[1, 0, 1],
		],
		1,
		1,
		2,
	);
	const expected = [
		[2, 2, 2],
		[2, 2, 0],
		[2, 0, 1],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing floodFill for test 2", () => {
	const result = floodFill(
		[
			[0, 0, 0],
			[0, 0, 0],
		],
		0,
		0,
		0,
	);
	const expected = [
		[0, 0, 0],
		[0, 0, 0],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing floodFill for test 3", () => {
	const result = floodFill(
		[
			[0, 0, 0],
			[0, 0, 0],
		],
		1,
		0,
		2,
	);
	const expected = [
		[2, 2, 2],
		[2, 2, 2],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
