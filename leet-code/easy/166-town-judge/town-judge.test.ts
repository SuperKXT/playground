import { expect, expectTypeOf, test } from "vitest";

import { findJudge } from "./town-judge.js";

test("testing findJudge for test 1", () => {
	const result = findJudge(1, []);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findJudge for test 2", () => {
	const result = findJudge(4, [
		[1, 3],
		[1, 4],
		[2, 3],
	]);
	const expected = -1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findJudge for test 3", () => {
	const result = findJudge(3, [
		[1, 3],
		[2, 3],
		[3, 1],
	]);
	const expected = -1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findJudge for test 4", () => {
	const result = findJudge(2, [[1, 2]]);
	const expected = 2 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing findJudge for test 5", () => {
	const result = findJudge(3, [
		[1, 3],
		[2, 3],
	]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
