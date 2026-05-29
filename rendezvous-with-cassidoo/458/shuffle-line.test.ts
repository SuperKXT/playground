import { expect, expectTypeOf, test } from "vitest";

import type { Utils } from "../../types/utils.types.js";

import { shuffleLine } from "./shuffle-line.js";

test("testing shuffleLine against test 1", () => {
	const result = shuffleLine(["Ada", "Ben", "Cam", "Diya", "Eli", "Fay"], 3); // cSpell: disable-line
	const expected = ["Ada", "Ben", "Diya", "Eli", "Cam", "Fay"] as const; // cSpell: disable-line;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing shuffleLine against test 2", () => {
	const result = shuffleLine(["A", "B", "C", "D", "E"], 2);
	const expected = ["A", "C", "E", "B", "D"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing shuffleLine against test 3", () => {
	const result = shuffleLine(["Mo", "Noah", "Oli"], 1);
	const expected = ["Mo", "Noah", "Oli"] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
