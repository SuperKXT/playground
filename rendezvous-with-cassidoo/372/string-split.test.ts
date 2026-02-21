import { expect, expectTypeOf, test } from "vitest";

import { stringSplit } from "./string-split.js";

import type { Utils } from "../../types/utils.types.js";

test("testing stringSplit", () => {
	const str = "This is so, so silly!";

	const result1 = stringSplit(str, " ");
	const expected1 = ["This", "is", "so,", "so", "silly!"] as const;

	expect(result1).toStrictEqual(expected1);

	expectTypeOf<Utils.deepReadonly<typeof result1>>(result1).toEqualTypeOf(
		expected1,
	);

	const result2 = stringSplit(str, "");
	const expected2 = [
		"T",
		"h",
		"i",
		"s",
		" ",
		"i",
		"s",
		" ",
		"s",
		"o",
		",",
		" ",
		"s",
		"o",
		" ",
		"s",
		"i",
		"l",
		"l",
		"y",
		"!",
	] as const;

	expect(result2).toStrictEqual(expected2);

	expectTypeOf<Utils.deepReadonly<typeof result2>>(result2).toEqualTypeOf(
		expected2,
	);

	const result3 = stringSplit(str, ",");
	const expected3 = ["This is so", " so silly!"] as const;

	expect(result3).toStrictEqual(expected3);

	expectTypeOf<Utils.deepReadonly<typeof result3>>(result3).toEqualTypeOf(
		expected3,
	);
});
