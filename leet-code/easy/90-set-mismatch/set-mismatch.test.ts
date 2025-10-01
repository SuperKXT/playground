import { assertType, expect, test } from "vitest";

import { setMismatch } from "./set-mismatch.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing setMismatch for test 1", () => {
	const result = setMismatch([1, 2, 2, 4]);
	const expected = [2, 3];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing setMismatch for test 2", () => {
	const result = setMismatch([1, 1]);
	const expected = [1, 2];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
