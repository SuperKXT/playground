import { assertType, expect, test } from "vitest";

import { squareRoot } from "./square-root.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing squareRoot for test 1", () => {
	const result = squareRoot(4);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing squareRoot for test 2", () => {
	const result = squareRoot(8);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing squareRoot for test 3", () => {
	const result = squareRoot(0);
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing squareRoot for test 4", () => {
	const result = squareRoot(1);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
