import { expect, expectTypeOf, test } from "vitest";

import { majorityElement } from "./majority-element.js";

test("testing majorityElement for test 1", () => {
	const result = majorityElement([3, 2, 3]);
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing majorityElement for test 2", () => {
	const result = majorityElement([2, 2, 1, 1, 2, 2, 3, 1]);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
