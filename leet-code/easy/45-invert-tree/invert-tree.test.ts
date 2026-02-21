import { expect, expectTypeOf, test } from "vitest";

import { invertTree } from "./invert-tree.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

test("testing invertTree for test 1", () => {
	const result = invertTree(arrayToBinaryTree([4, 2, 7, 1, 3, 6, 9]));
	const expected = arrayToBinaryTree([4, 7, 2, 9, 6, 3, 1]);

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing invertTree for test 2", () => {
	const result = invertTree(arrayToBinaryTree([2, 1, 3]));
	const expected = arrayToBinaryTree([2, 3, 1]);

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
