import { assertType, expect, test } from "vitest";

import { linkedListCycle } from "./linked-list-cycle.js";

import {
	arrayToLinkedList,
	insertNodeToLinkedList,
} from "../../../helpers/linked-list.helpers.js";

import type { Utils } from "../../../types/utils.types.js";

test("testing linkedListCycle for test 1", () => {
	const preList = arrayToLinkedList([3, 2, 0]);
	const list = insertNodeToLinkedList(preList, preList.head.next);
	const result = linkedListCycle(list.head);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<typeof result, typeof expected>;
	assertType<TTrue>(true);
});

test("testing linkedListCycle for test 2", () => {
	const preList = arrayToLinkedList([1, 2]);
	const list = insertNodeToLinkedList(preList, preList.head);
	const result = linkedListCycle(list.head);
	const expected = true as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});

test("testing linkedListCycle for test 3", () => {
	const result = linkedListCycle(arrayToLinkedList([1]).head);
	const expected = false as boolean;
	expect(result).toStrictEqual(expected);
	type TTrue = Utils.equal<Readonly<typeof result>, typeof expected>;
	assertType<TTrue>(true);
});
