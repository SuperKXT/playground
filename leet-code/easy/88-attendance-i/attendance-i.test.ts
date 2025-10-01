import { assertType, expect, test } from "vitest";

import { attendance } from "./attendance-i.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing attendance for test 1", () => {
	const result = attendance("PPALLP"); // cSpell: disable-line
	const expected = true;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing attendance for test 2", () => {
	const result = attendance("PPALLL"); // cSpell: disable-line
	const expected = false;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
