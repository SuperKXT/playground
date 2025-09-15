import { assertType, expect, test } from "vitest";

import { inOrderTraversal } from "./in-order-traversal.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing inOrderTraversal for test 1", () => {
	const result = inOrderTraversal(
		arrayToBinaryTree([1, null, 2, null, null, 3]),
	);
	const expected = [1, 3, 2];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing inOrderTraversal for test 2", () => {
	const result = inOrderTraversal(
		arrayToBinaryTree([
			1,
			2,
			3,
			4,
			5,
			null,
			8,
			null,
			null,
			6,
			7,
			null,
			null,
			9,
		]),
	);
	const expected = [4, 2, 6, 5, 7, 1, 3, 9, 8];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing inOrderTraversal for test 3", () => {
	const result = inOrderTraversal(arrayToBinaryTree([]));
	const expected = [] as number[];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing inOrderTraversal for test 4", () => {
	const result = inOrderTraversal(arrayToBinaryTree([1]));
	const expected = [1];
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
