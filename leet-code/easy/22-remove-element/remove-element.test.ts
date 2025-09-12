import { assertType, expect, test } from "vitest";

import { removeElement } from "./remove-element.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing removeElement for test 1", () => {
	const arr = [3, 2, 2, 3];
	const result = removeElement(arr, 3);
	const expected = 2 as number;
	const removed = [2, 2];
	expect(result).toStrictEqual(expected);
	expect(removed).toStrictEqual(arr);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing removeElement for test 2", () => {
	const arr = [0, 1, 2, 2, 3, 0, 4, 2];
	const result = removeElement(arr, 2);
	const expected = 5 as number;
	const removed = [0, 1, 3, 0, 4];
	expect(result).toStrictEqual(expected);
	expect(removed).toStrictEqual(arr);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
