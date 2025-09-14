import { assertType, expect, test } from "vitest";

import { sameTree } from "./same-tree.js";

import { arrayToBinaryTree } from "../../../helpers/binary-tree.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing sameTree for test 1", () => {
	const result = sameTree(
		arrayToBinaryTree([1, 2, 3]),
		arrayToBinaryTree([1, 2, 3]),
	);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sameTree for test 2", () => {
	const result = sameTree(
		arrayToBinaryTree([1, 2]),
		arrayToBinaryTree([1, null, 2]),
	);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing sameTree for test 3", () => {
	const result = sameTree(
		arrayToBinaryTree([1, 2, 1]),
		arrayToBinaryTree([1, 1, 2]),
	);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
