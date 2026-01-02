import { assertType, expect, test } from "vitest";

import { goatLatin } from "./goat-latin.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing sortArrayByParity for test 1", () => {
	const result = goatLatin("I speak Goat Latin");
	const expected = "Imaa peaksmaaa oatGmaaaa atinLmaaaaa"; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sortArrayByParity for test 2", () => {
	const result = goatLatin("The quick brown fox jumped over the lazy dog");
	const expected =
		"heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa"; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
