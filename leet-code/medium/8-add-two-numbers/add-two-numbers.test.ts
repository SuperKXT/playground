import { expect, test } from "vitest";

import { addTwoNumbers } from "./add-two-numbers.js";

import { arrayToLinkedList } from "../../../helpers/linked-list.helpers.js";

test("testing addTwoNumbers for test 1", () => {
	const num1 = arrayToLinkedList([2, 4, 3]);
	const num2 = arrayToLinkedList([5, 6, 4]);
	const res = addTwoNumbers(num1.head, num2.head);
	const expected = arrayToLinkedList([7, 0, 8]);
	expect(res).toStrictEqual(expected.head);
});

test("testing addTwoNumbers for test 2", () => {
	const num1 = arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]);
	const num2 = arrayToLinkedList([9, 9, 9, 9]);
	const res = addTwoNumbers(num1.head, num2.head);
	const expected = arrayToLinkedList([8, 9, 9, 9, 0, 0, 0, 1]);
	expect(res).toStrictEqual(expected.head);
});

test("testing addTwoNumbers for test 2", () => {
	const num1 = arrayToLinkedList([0]);
	const num2 = arrayToLinkedList([0]);
	const res = addTwoNumbers(num1.head, num2.head);
	const expected = arrayToLinkedList([0]);
	expect(res).toStrictEqual(expected.head);
});
