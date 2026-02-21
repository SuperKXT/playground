import { expect, expectTypeOf, test } from "vitest";

import { removeElements } from "./remove-linked-list-element.js";

import { arrayToLinkedList } from "../../../helpers/linked-list.helpers.js";

test("testing removeElements for test 1", () => {
	const list = arrayToLinkedList([1, 2, 6, 3, 4, 5, 6]);
	const result = removeElements(list.head, 6);
	const expected = arrayToLinkedList([1, 2, 3, 4, 5]).head;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing removeElements for test 2", () => {
	const list = arrayToLinkedList([]);
	const result = removeElements(list.head, 1);
	const expected = null;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing removeElements for test 3", () => {
	const list = arrayToLinkedList([7, 7, 7, 7]);
	const result = removeElements(list.head, 7);
	const expected = null;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
