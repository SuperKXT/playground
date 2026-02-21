import { expect, expectTypeOf, test } from "vitest";

import { reverseLinkedList } from "./reverse-linked-list.js";

import { arrayToLinkedList } from "../../../helpers/linked-list.helpers.js";

test("testing reverseLinkedList for test 1", () => {
	const result = reverseLinkedList(arrayToLinkedList([1, 2, 3, 4, 5]).head);
	const expected = arrayToLinkedList([5, 4, 3, 2, 1]).head;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing reverseLinkedList for test 2", () => {
	const result = reverseLinkedList(arrayToLinkedList([1, 2]).head);
	const expected = arrayToLinkedList([2, 1]).head;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
