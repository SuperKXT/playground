import { expect, expectTypeOf, test } from "vitest";

import { nimGame } from "./nim-game.js";

test("testing nimGame for test 1", () => {
	const result = nimGame(4);
	const expected = false;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing nimGame for test 2", () => {
	const result = nimGame(5);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing nimGame for test 3", () => {
	const result = nimGame(1);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing nimGame for test 4", () => {
	const result = nimGame(2);
	const expected = true;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
