import { expect, expectTypeOf, test } from "vitest";

import { diStringMatch } from "./di-string-match.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing diStringMatch for test 1", () => {
	const result = diStringMatch("IDID"); // cSpell: disable-line
	const expected = [0, 4, 1, 3, 2] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing diStringMatch for test 2", () => {
	const result = diStringMatch("III");
	const expected = [0, 1, 2, 3] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing diStringMatch for test 3", () => {
	const result = diStringMatch("DDI");
	const expected = [3, 2, 0, 1] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
