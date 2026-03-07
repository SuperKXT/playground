import { expect, expectTypeOf, test } from "vitest";

import { deleteColumnsToMakeSorted } from "./delete-columns-to-make-sorted.js";

test("testing deleteColumnsToMakeSorted for test 1", () => {
	const result = deleteColumnsToMakeSorted(["cba", "daf", "ghi"]);
	const expected = 1 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing deleteColumnsToMakeSorted for test 2", () => {
	const result = deleteColumnsToMakeSorted(["a", "b"]);
	const expected = 0 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing deleteColumnsToMakeSorted for test 3", () => {
	const result = deleteColumnsToMakeSorted(["zyx", "wvu", "tsr"]);
	const expected = 3 as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
