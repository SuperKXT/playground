import { expect, expectTypeOf, test } from "vitest";

import { findMode } from "./find-bst-mode.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

test("testing arrayToBinaryTree for test 1", () => {
	const tree = arrayToBinaryTree([1, null, 2, null, null, 2]);
	const result = findMode(tree);
	const expected = [2];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing arrayToBinaryTree for test 2", () => {
	const tree = arrayToBinaryTree([0]);
	const result = findMode(tree);
	const expected = [0];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing arrayToBinaryTree for test 3", () => {
	const tree = arrayToBinaryTree([]);
	const result = findMode(tree);
	const expected = [] as number[];

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
