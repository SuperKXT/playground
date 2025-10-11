import { assertType, expect, test } from "vitest";

import { nextGreatestLetter } from "./next-greatest-letter.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing pivotIndex for test 1", () => {
	const result = nextGreatestLetter(["c", "f", "j"], "a");
	const expected = "c" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing pivotIndex for test 2", () => {
	const result = nextGreatestLetter(["c", "f", "j"], "c");
	const expected = "f" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing pivotIndex for test 3", () => {
	const result = nextGreatestLetter(["x", "x", "y", "y"], "z");
	const expected = "x" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
