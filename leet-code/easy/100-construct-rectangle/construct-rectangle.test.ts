import { assertType, expect, test } from "vitest";

import { constructRectangle } from "./construct-rectangle.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing reshapeMatrix for test 1", () => {
	const result = constructRectangle(["Hello", "Alaska", "Dad", "Peace"]);
	const expected = ["Alaska", "Dad"] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing reshapeMatrix for test 2", () => {
	const result = constructRectangle(["omk"]);
	const expected = [] as const;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing reshapeMatrix for test 2", () => {
	const result = constructRectangle(["adsdf", "sfd"]); // cSpell: disable-line
	const expected = ["adsdf", "sfd"] as const; // cSpell: disable-line
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
