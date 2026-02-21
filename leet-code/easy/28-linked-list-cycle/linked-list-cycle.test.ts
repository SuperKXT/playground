import { expect, expectTypeOf, test } from "vitest";

import { linkedListCycle } from "./linked-list-cycle.js";

import {
	arrayToLinkedList,
	insertNodeToLinkedList,
} from "../../../helpers/linked-list.helpers.js";

test("testing linkedListCycle for test 1", () => {
	const preList = arrayToLinkedList([3, 2, 0]);
	const list = insertNodeToLinkedList(preList, preList.head.next);
	const result = linkedListCycle(list.head);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing linkedListCycle for test 2", () => {
	const preList = arrayToLinkedList([1, 2]);
	const list = insertNodeToLinkedList(preList, preList.head);
	const result = linkedListCycle(list.head);
	const expected = true as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});

test("testing linkedListCycle for test 3", () => {
	const result = linkedListCycle(arrayToLinkedList([1]).head);
	const expected = false as boolean;

	expect(result).toStrictEqual(expected);

	expectTypeOf(result).toEqualTypeOf(expected);
});
