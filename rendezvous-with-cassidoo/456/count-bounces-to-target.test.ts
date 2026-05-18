import { expect, expectTypeOf, test } from "vitest";

import { countBouncesToTarget } from "./count-bounces-to-target.js";

test("testing countBouncesToTarget against test 1", () => {
	const result = countBouncesToTarget({
		grid: [8, 8],
		start: [0, 0],
		target: [3, 4],
		speed: [1, 4],
	});
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing countBouncesToTarget against test 2", () => {
	const result = countBouncesToTarget({
		grid: [3, 3],
		start: [0, 1],
		target: [2, 1],
		speed: [1, 1],
	});
	const expected = 1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing countBouncesToTarget against test 3", () => {
	const result = countBouncesToTarget({
		grid: [4, 5],
		start: [0, 0],
		target: [3, 3],
		speed: [1, 1],
	});
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing countBouncesToTarget against test 4", () => {
	const result = countBouncesToTarget({
		grid: [4, 5],
		start: [2, 0],
		target: [0, 2],
		speed: [-1, 1],
	});
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing countBouncesToTarget against test 5", () => {
	const result = countBouncesToTarget({
		grid: [4, 5],
		start: [2, 0],
		target: [2, 2],
		speed: [-1, 1],
	});
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing countBouncesToTarget against test 6", () => {
	const result = countBouncesToTarget({
		grid: [4, 5],
		start: [3, 0],
		target: [1, 1],
		speed: [-1, 1],
	});
	const expected = -1 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing countBouncesToTarget against test 7", () => {
	const result = countBouncesToTarget({
		grid: [4, 5],
		start: [2, 0],
		target: [3, 1],
		speed: [-1, 1],
	});
	const expected = 8 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
