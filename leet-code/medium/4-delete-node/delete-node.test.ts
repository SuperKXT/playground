import { expect, test } from "vitest";

import {
	arrayToLinkedList,
	linkedListToArray,
} from "../../../helpers/linked-list.helpers.js";

import { deleteNode } from "./delete-node.js";

test("testing arrayToLinkedList for test 1", () => {
	const list = arrayToLinkedList([4, 5, 1, 9]);
	const node = list.head.next;
	deleteNode(node);
	const expected = [4, 1, 9];

	expect(linkedListToArray(list)).toStrictEqual(expected);
});

test("testing arrayToLinkedList for test 2", () => {
	const list = arrayToLinkedList([4, 5, 1, 9]);
	const node = list.head.next.next;
	deleteNode(node);
	const expected = [4, 5, 9];

	expect(linkedListToArray(list)).toStrictEqual(expected);
});
