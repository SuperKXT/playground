import { assertType, expect, test } from "vitest";

import { longPressedName } from "./long-pressed-name.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing longPressedName for test 1", () => {
	const result = longPressedName("alex", "aaleex"); // cSpell: disable-line
	const expected = true as boolean;
	expect(result).toBe(expected);

	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing longPressedName for test 2", () => {
	const result = longPressedName("saeed", "ssaaedd"); // cSpell: disable-line
	const expected = false as boolean;
	expect(result).toBe(expected);

	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
