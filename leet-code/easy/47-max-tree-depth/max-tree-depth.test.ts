import { assertType, expect, test } from "vitest";

import { maxDepth } from "./max-tree-depth.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing minDepth for test 1", () => {
	const result = maxDepth(arrayToBinaryTree([3, 9, 20, null, null, 15, 7]));
	const expected = 3 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing minDepth for test 2", () => {
	const result = maxDepth(arrayToBinaryTree([1, null, 2]));
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
