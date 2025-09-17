import { assertType, expect, test } from "vitest";

import { intersectionNode } from "./intersection-node.js";

import {
	arrayToLinkedList,
	insertNodeToLinkedList,
} from "../../../helpers/linked-list.helpers.js";

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";
import type { Utils } from "../../../types/utils.types.js";

test("testing intersectionNode for test 1", () => {
	const intersected = arrayToLinkedList([8, 4, 5] as number[]);
	const list1 = arrayToLinkedList([4, 1] as number[]);
	insertNodeToLinkedList(list1, intersected.head);
	const list2 = arrayToLinkedList([5, 6, 1] as number[]);
	insertNodeToLinkedList(list2, intersected.head);

	const result = intersectionNode(list1.head, list2.head);
	const expected = intersected.head;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing intersectionNode for test 2", () => {
	const intersected = arrayToLinkedList([2, 4] as number[]);
	const list1 = arrayToLinkedList([1, 9, 1] as number[]);
	insertNodeToLinkedList(list1, intersected.head);
	const list2 = arrayToLinkedList([3] as number[]);
	insertNodeToLinkedList(list2, intersected.head);

	const result = intersectionNode(list1.head, list2.head);
	const expected = intersected.head;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing intersectionNode for test 3", () => {
	const list1 = arrayToLinkedList([2, 6, 4] as number[]);
	const list2 = arrayToLinkedList([1, 5] as number[]);

	const result = intersectionNode(list1.head, list2.head);
	const expected = null as TLinkedListNode<number>;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});
