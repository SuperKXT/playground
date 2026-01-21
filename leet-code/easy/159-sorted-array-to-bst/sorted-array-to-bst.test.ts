import { assertType, expect, test } from "vitest";

import { sortedArrayToBST } from "./sorted-array-to-bst.js";

import type { TBinaryTreeNode } from "../../../helpers/binary-tree.helpers.js";
import type { Utils } from "../../../types/utils.types.js";

test("testing sortedArrayToBST for test 1", () => {
	const result = sortedArrayToBST([-10, -3, 0, 5, 9]);
	const expected = {
		val: 0,
		left: { val: -3, left: { val: -10, left: null, right: null }, right: null },
		right: { val: 9, left: { val: 5, left: null, right: null }, right: null },
	} as TBinaryTreeNode<number>;
	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sortedArrayToBST for test 2", () => {
	const result = sortedArrayToBST([1, 3]);
	const expected = {
		val: 3,
		left: { val: 1, left: null, right: null },
		right: null,
	} as TBinaryTreeNode<number>;
	expect(result).toStrictEqual(expected);

	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
