import { expect, expectTypeOf, test } from "vitest";

import { excludeString } from "./exclude-string.helpers.js";

test("should test excludeString", () => {
	const string1 = "foo" as "foo" | "bar" | "baz";
	const response1 = excludeString(string1, "foo");

	expect(response1).toBeUndefined();

	expectTypeOf(response1).toEqualTypeOf<
		Exclude<typeof string1, "foo"> | undefined
	>();

	const string2 = "bar" as "foo" | "bar" | "baz";
	const response2 = excludeString(string2, "foo", "baz");

	expect(response2).toBe("bar");

	expectTypeOf(response1).toEqualTypeOf<
		Exclude<typeof string1, "foo"> | undefined
	>();
	expectTypeOf(response2).toEqualTypeOf<
		Exclude<typeof string2, "foo" | "baz"> | undefined
	>();
});
