import { assertType, expect, test } from "vitest";

import { reverseOnlyLetters } from "./reverse-only-letters.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing reverseOnlyLetters for test 1", () => {
	const result = reverseOnlyLetters("ab-cd");
	const expected = "dc-ba";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing reverseOnlyLetters for test 2", () => {
	const result = reverseOnlyLetters("a-bC-dEf-ghIj");
	const expected = "j-Ih-gfE-dCba";
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing reverseOnlyLetters for test 3", () => {
	const result = reverseOnlyLetters("Test1ng-Leet=code-Q!");
	const expected = "Qedo1ct-eeLg=ntse-T!"; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
