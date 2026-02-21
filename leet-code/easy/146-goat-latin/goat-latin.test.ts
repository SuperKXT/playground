import { expect, expectTypeOf, test } from "vitest";

import { goatLatin } from "./goat-latin.js";

test("testing sortArrayByParity for test 1", () => {
	const result = goatLatin("I speak Goat Excellent Latin");
	const expected =
		"Imaa peaksmaaa oatGmaaaa Excellentmaaaaa atinLmaaaaaa" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing sortArrayByParity for test 2", () => {
	const result = goatLatin("The quick brown fox jumped over the lazy dog");
	const expected =
		"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa" as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
