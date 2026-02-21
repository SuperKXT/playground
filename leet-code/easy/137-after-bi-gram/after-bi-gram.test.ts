import { expect, expectTypeOf, test } from "vitest";

import { afterBiGram } from "./after-bi-gram.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing afterBiGram for test 1", () => {
	const result = afterBiGram(
		"alice is a good girl she is a good student",
		"a",
		"good",
	);
	const expected = ["girl", "student"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing afterBiGram for test 2", () => {
	const result = afterBiGram("we will we will rock you", "we", "will");
	const expected = ["we", "rock"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing afterBiGram for test 3", () => {
	const result = afterBiGram(
		"alice is aa good girl she is a good student",
		"a",
		"good",
	);
	const expected = ["student"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
