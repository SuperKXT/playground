import { assertType, expect, test } from "vitest";

import { insertPosition } from "./insert-position.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing insertPosition for test 1", () => {
	const result = insertPosition([1, 3, 5, 6], 5);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing insertPosition for test 2", () => {
	const result = insertPosition([1, 3, 5, 6], 2);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing insertPosition for test 3", () => {
	const result = insertPosition([1, 3, 5, 6], 7);
	const expected = 4 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
