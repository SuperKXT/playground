import { assertType, expect, test } from "vitest";

import { minDepth } from "./min-tree-depth.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing minDepth for test 1", () => {
	const result = minDepth(arrayToBinaryTree([3, 9, 20, null, null, 15, 7]));
	const expected = 2 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing minDepth for test 2", () => {
	const result = minDepth(
		arrayToBinaryTree([
			2,
			null,
			3,
			null,
			null,
			null,
			4,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			5,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			null,
			6,
		]),
	);
	const expected = 5 as number;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
