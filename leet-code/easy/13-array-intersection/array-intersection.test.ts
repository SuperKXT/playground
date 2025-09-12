import { assertType, expect, test } from "vitest";

import { arrayIntersection } from "./array-intersection.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing arrayIntersection for test 1", () => {
	const result = arrayIntersection([1, 2, 2, 1], [2, 2]);
	const expected = [2, 2] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing arrayIntersection for test 2", () => {
	const result = arrayIntersection([4, 9, 5], [9, 4, 9, 8, 4]);
	const expected = [4, 9] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
