import { assertType, expect, test } from "vitest";

import { sortHexColors } from "./sort-hex-colors.js";

import type { Utils } from "../../types/utils.types.js";

test("testing sortHexColors against test 1", () => {
	const result = sortHexColors([
		"008000",
		"0000FF",
		"00FFFF",
		"000080",
		"008080",
		"00FF00",
		"800000",
		"808000",
		"000000",
		"800080",
		"808080",
		"FF0000",
		"C0C0C0",
		"FFFF00",
		"FFFFFF",
		"FF00FF",
	]);
	const expected = [
		"000000",
		"000080",
		"0000FF",
		"008000",
		"008080",
		"00FF00",
		"00FFFF",
		"800000",
		"800080",
		"808000",
		"808080",
		"C0C0C0",
		"FF0000",
		"FF00FF",
		"FFFF00",
		"FFFFFF",
	];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
