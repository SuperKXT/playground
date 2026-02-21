import { expect, expectTypeOf, test } from "vitest";

import { deleteDuplicateNodes } from "./delete-duplicate-nodes.js";

import { arrayToLinkedList } from "../../../helpers/linked-list.helpers.js";

test("testing deleteDuplicateNodes for test 1", () => {
	const result = deleteDuplicateNodes(arrayToLinkedList([1, 1, 2]).head);
	const expected = arrayToLinkedList([1, 2]).head;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing deleteDuplicateNodes for test 2", () => {
	const result = deleteDuplicateNodes(arrayToLinkedList([1, 1, 2, 3, 3]).head);
	const expected = arrayToLinkedList([1, 2, 3]).head;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing deleteDuplicateNodes for test 3", () => {
	const result = deleteDuplicateNodes(arrayToLinkedList([1, 1, 1]).head);
	const expected = arrayToLinkedList([1]).head;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
