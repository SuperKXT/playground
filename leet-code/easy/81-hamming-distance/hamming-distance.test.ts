import { assertType, expect, test } from "vitest";

import { hammingDistance } from "./hamming-distance.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing hammingDistance for test 1", () => {
	const result = hammingDistance(1, 4);
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing hammingDistance for test 2", () => {
	const result = hammingDistance(3, 1);
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
