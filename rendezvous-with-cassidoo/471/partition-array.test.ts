import { expect, expectTypeOf, test } from "vitest";

import { partitionArray } from "./partition-array.js";

test("testing partitionArray against test 1", () => {
	const result = partitionArray([0, 3, 2, 1, 4, 0, 7]);
	const expected = [3, 1, 7, 2, 4, 0, 0] as const;

	expect(result).toStrictEqual(expected);

	expectTypeOf<Readonly<typeof result>>(result).toEqualTypeOf(expected);
});
