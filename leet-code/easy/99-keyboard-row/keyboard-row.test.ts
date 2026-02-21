import { expect, expectTypeOf, test } from "vitest";

import { keyboardRow } from "./keyboard-row.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing reshapeMatrix for test 1", () => {
	const result = keyboardRow(["Hello", "Alaska", "Dad", "Peace"]);
	const expected = ["Alaska", "Dad"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing reshapeMatrix for test 2", () => {
	const result = keyboardRow(["omk"]);
	const expected = [] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing reshapeMatrix for test 3", () => {
	const result = keyboardRow(["adsdf", "sfd"]); // cSpell: disable-line
	const expected = ["adsdf", "sfd"] as const; // cSpell: disable-line

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
