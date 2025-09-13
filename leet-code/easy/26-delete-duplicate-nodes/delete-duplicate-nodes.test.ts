import { assertType, expect, test } from "vitest";

import { deleteDuplicateNodes } from "./delete-duplicate-nodes.js";

import { arrayToLinkedList } from "../../../helpers/linked-list.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing deleteDuplicateNodes for test 1", () => {
	const result = deleteDuplicateNodes(arrayToLinkedList([1, 1, 2]).head);
	const expected = arrayToLinkedList([1, 2]).head;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing deleteDuplicateNodes for test 2", () => {
	const result = deleteDuplicateNodes(arrayToLinkedList([1, 1, 2, 3, 3]).head);
	const expected = arrayToLinkedList([1, 2, 3]).head;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing deleteDuplicateNodes for test 2", () => {
	const result = deleteDuplicateNodes(arrayToLinkedList([1, 1, 1]).head);
	const expected = arrayToLinkedList([1]).head;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
