import { assertType, expect, test } from "vitest";

import { robotCircle } from "./robot-circle.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing selfDividingNumbers for test 1", () => {
	const result = robotCircle("UD");
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing selfDividingNumbers for test 2", () => {
	const result = robotCircle("LL");
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
