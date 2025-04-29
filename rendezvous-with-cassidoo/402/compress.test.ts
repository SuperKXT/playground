import { assertType, expect, test } from "vitest";

import { compress } from "./compress.js";

test("testing compress against test 1", () => {
	const result = compress(["a", "b", "b", "b", "c"]);
	const expected = ["a", "b", "3", "c"] as const;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});

test("testing compress against test 2", () => {
	const result = compress(["a", "a", "b", "b", "c", "c", "c"]);
	const expected = ["a", "2", "b", "2", "c", "3"] as const;
	expect(result).toStrictEqual(expected);
	assertType<Readonly<typeof result>>(expected);
});
