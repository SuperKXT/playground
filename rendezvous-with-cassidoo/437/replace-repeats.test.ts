import { assertType, expect, test } from "vitest";

import { replaceRepeats } from "./replace-repeats.js";

import type { Utils } from "../../types/utils.types.js";

test("testing replaceRepeats against test 1", () => {
	const result = replaceRepeats("1234500362000440", 0);
	const expected = "1234523623441" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing replaceRepeats against test 2", () => {
	const result = replaceRepeats("000000000000", 0);
	const expected = "12" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing replaceRepeats against test 3", () => {
	const result = replaceRepeats("123456789", 1);
	const expected = "123456789" as string;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Utils.deepReadonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
