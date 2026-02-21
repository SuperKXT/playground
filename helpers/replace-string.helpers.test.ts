import { expect, expectTypeOf, test } from "vitest";

import { replaceString } from "./replace-string.helpers.js";

test("replaceString", () => {
	const first = {
		response: replaceString("example_string_value", "_", " "),
		expected: "example string value",
	} as const;

	expect(first.response).toBe(first.expected);

	expectTypeOf(first.response).toEqualTypeOf(first.expected);

	const second = {
		response: replaceString("example_string_value", " ", "-"),
		expected: "example_string_value",
	} as const;

	expect(second.response).toBe(second.expected);

	expectTypeOf(second.response).toEqualTypeOf(second.expected);
});
