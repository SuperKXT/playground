import { assertType, expect, test } from "vitest";

import { invertTree } from "./invert-binary-tree.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing invertTree for test 1", () => {
	const result = invertTree(arrayToBinaryTree([4, 2, 7, 1, 3, 6, 9]));
	const expected = arrayToBinaryTree([4, 7, 2, 9, 6, 3, 1]);
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing invertTree for test 2", () => {
	const result = invertTree(arrayToBinaryTree([2, 1, 3]));
	const expected = arrayToBinaryTree([2, 3, 1]);
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
