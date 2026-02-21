import { expect, expectTypeOf, test } from "vitest";

import { replaceElements } from "./replace-elements-with-greatest.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing replaceElements for test 1", () => {
	const result = replaceElements([17, 18, 5, 4, 6, 1]);
	const expected = [18, 6, 6, 6, 1, -1] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});

test("testing replaceElements for test 2", () => {
	const result = replaceElements([400]);
	const expected = [-1] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Utils.deepReadonly<typeof result>>(result).toEqualTypeOf(
		expected,
	);
});
