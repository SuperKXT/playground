import { assertType, expect, test } from "vitest";

import { countAndSay } from "./count-and-say.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing countAndSay for test 1", () => {
	const result = countAndSay(1);
	const expected = "1" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing countAndSay for test 2", () => {
	const result = countAndSay(4);
	const expected = "1211" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
