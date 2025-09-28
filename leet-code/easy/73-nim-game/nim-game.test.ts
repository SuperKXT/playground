import { assertType, expect, test } from "vitest";

import { nimGame } from "./nim-game.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing nimGame for test 1", () => {
	const result = nimGame(4);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing nimGame for test 2", () => {
	const result = nimGame(5);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing nimGame for test 3", () => {
	const result = nimGame(1);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing nimGame for test 4", () => {
	const result = nimGame(2);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
