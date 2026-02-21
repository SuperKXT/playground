import { expect, expectTypeOf, test } from "vitest";

import { compress } from "./compress.js";

import type { Utils } from "../../types/utils.types.js";

test("testing compress against test 1", () => {
	const result = compress(["a", "b", "b", "b", "c"]);
	const expected = ["a", "b", "3", "c"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing compress against test 2", () => {
	const result = compress(["a", "a", "b", "b", "c", "c", "c"]);
	const expected = ["a", "2", "b", "2", "c", "3"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
