import { expect, expectTypeOf, test } from "vitest";

import { numberOfLines } from "./number-of-lines.js";

test("testing jewelsStones for test 1", () => {
	const result = numberOfLines(
		[
			10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
			10, 10, 10, 10, 10, 10, 10, 10,
		],
		"abcdefghijklmnopqrstuvwxyz", // cSpell: disable-line
	);
	const expected = [3, 60] as [number, number];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing jewelsStones for test 2", () => {
	const result = numberOfLines(
		[
			4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
			10, 10, 10, 10, 10, 10, 10,
		],
		"bbbcccdddaaa", // cSpell: disable-line
	);
	const expected = [2, 4] as [number, number];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
