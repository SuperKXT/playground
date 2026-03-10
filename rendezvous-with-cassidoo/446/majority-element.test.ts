import { expect, expectTypeOf, test } from "vitest";

import { majorityElement } from "./majority-element.js";

test("testing majorityElement against test 1", () => {
	const result = majorityElement([2, 2, 1, 1, 2, 2, 1, 2, 2]);
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing majorityElement against test 2", () => {
	const result = majorityElement([3, 3, 4, 2, 3, 3, 1]);
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
