import { expect, expectTypeOf, test } from "vitest";

import { reorder } from "./reorder.js";

test("testing reorder against test 1", () => {
	const a = ["C", "D", "E", "F", "G", "H"];
	const b = [3, 0, 4, 1, 2, 5];
	const result = reorder(a, b);
	const expected = ["D", "F", "G", "C", "E", "H"];

	expect(result).toStrictEqual(expected);

	expectTypeOf<typeof result>(result).toEqualTypeOf(expected);
});
