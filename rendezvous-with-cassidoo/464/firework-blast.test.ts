import { expect, expectTypeOf, test } from "vitest";

import { fireworkBlast } from "./firework-blast.js";

test("testing fireworkBlast against test 1", () => {
	const result = fireworkBlast(5, 5, 3, 1, 1);
	const expected: Array<[number, number]> = [
		[0, 0],
		[0, 1],
		[0, 2],
		[1, 0],
		[1, 1],
		[1, 2],
		[2, 0],
		[2, 1],
		[2, 2],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing fireworkBlast against test 2", () => {
	const result = fireworkBlast(3, 3, 1, 2, 1);
	const expected: Array<[number, number]> = [[2, 1]];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing fireworkBlast against test 3", () => {
	const result = fireworkBlast(5, 5, 3, 4, 4);
	const expected: Array<[number, number]> = [
		[3, 3],
		[3, 4],
		[4, 3],
		[4, 4],
	];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
