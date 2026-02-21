import { expect, expectTypeOf, test } from "vitest";

import { binaryGap } from "./binary-gap.js";

test("testing binaryGap for test 1", () => {
	const result = binaryGap(22);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing binaryGap for test 2", () => {
	const result = binaryGap(8);
	const expected = 0 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing binaryGap for test 3", () => {
	const result = binaryGap(5);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
