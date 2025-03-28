import { assertType, expect, test } from "vitest";

import { evaluatePostfix } from "./evaluate-postfix.js";

test("testing evaluatePostfix against test 1", () => {
	const result = evaluatePostfix("12+");
	const expected = 3;
	expect(result).toStrictEqual(expected);
	assertType<typeof result>(expected);
});

test("testing evaluatePostfix against test 2", () => {
	const result = evaluatePostfix("56+7*");
	const expected = 77;
	expect(result).toStrictEqual(expected);
	assertType<typeof result>(expected);
});
