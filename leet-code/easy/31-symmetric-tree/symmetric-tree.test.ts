import { assertType, expect, test } from "vitest";

import { symmetricTree } from "./symmetric-tree.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing symmetricTree for test 1", () => {
	const result = symmetricTree(arrayToBinaryTree([1, 2, 2, 3, 4, 4, 3]));
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing symmetricTree for test 2", () => {
	const result = symmetricTree(arrayToBinaryTree([1, 2, 2, null, 3, null, 3]));
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing symmetricTree for test 3", () => {
	const result = symmetricTree(arrayToBinaryTree([1, 2, 2, 2, null, 2]));
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
