import { expect, expectTypeOf, test } from "vitest";

import { countBlinks } from "./count-blinks.js";

test("testing countBlinks against test 1", () => {
	const result = countBlinks("_..__...._.");
	const expected = 4 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});

test("testing countBlinks against test 2", () => {
	const result = countBlinks("...._");
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
