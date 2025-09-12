import { expect, test } from "vitest";

import { mergeSortedLists } from "./merge-sorted-lists.js";

import { arrayToLinkedList } from "../../../helpers/linked-list.helpers.js";

test("testing mergeSortedLists for test 1", () => {
	const result = mergeSortedLists(
		arrayToLinkedList([1, 2, 4]).head,
		arrayToLinkedList([1, 3, 4]).head,
	);
	const expected = arrayToLinkedList([1, 1, 2, 3, 4, 4]).head;
	expect(result).toStrictEqual(expected);
});

test("testing mergeSortedLists for test 2", () => {
	const result = mergeSortedLists(
		arrayToLinkedList([]).head,
		arrayToLinkedList([]).head,
	);
	const expected = arrayToLinkedList([]).head;
	expect(result).toStrictEqual(expected);
});

test("testing mergeSortedLists for test 2", () => {
	const result = mergeSortedLists(
		arrayToLinkedList([]).head,
		arrayToLinkedList([0]).head,
	);
	const expected = arrayToLinkedList([0]).head;
	expect(result).toStrictEqual(expected);
});
