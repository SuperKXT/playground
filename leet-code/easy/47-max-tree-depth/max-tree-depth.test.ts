import { expect, expectTypeOf, test } from "vitest";

import { maxDepth } from "./max-tree-depth.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

test("testing maxDepth for test 1", () => {
	const result = maxDepth(arrayToBinaryTree([3, 9, 20, null, null, 15, 7]));
	const expected = 3 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing maxDepth for test 2", () => {
	const result = maxDepth(arrayToBinaryTree([1, null, 2]));
	const expected = 2 as number;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
