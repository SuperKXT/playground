import { assertType, expect, test } from "vitest";

import { countNodes } from "./count-tree-nodes.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing countNodes for test 1", () => {
	const result = countNodes(arrayToBinaryTree([1, 2, 3, 4, 5, 6]));
	const expected = 6 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing countNodes for test 2", () => {
	const result = countNodes(arrayToBinaryTree([]));
	const expected = 0 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing countNodes for test 3", () => {
	const result = countNodes(arrayToBinaryTree([1]));
	const expected = 1 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
