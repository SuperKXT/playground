import { assertType, expect, test } from "vitest";

import { oneBitChar } from "./one-bit-char.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing oneBitChar for test 1", () => {
	const result = oneBitChar([1, 0, 0]);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing oneBitChar for test 2", () => {
	const result = oneBitChar([1, 1, 1, 0]);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
