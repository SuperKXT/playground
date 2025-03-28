import { assertType, expect, test } from "vitest";

import { shieldBreak } from "./shield-break.js";

test("testing shieldBreak against test 1", () => {
	const result = shieldBreak([10, 20, 30, 40], 50);
	const expected = 2;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing shieldBreak against test 1", () => {
	const result = shieldBreak([1, 2, 3, 4], 20);
	const expected = -1;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing shieldBreak against test 3", () => {
	const result = shieldBreak([50], 30);
	const expected = 0;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});
