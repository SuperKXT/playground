import { expect, expectTypeOf, test } from "vitest";

import {
	arrayToLinkedList,
	insertNodeToLinkedList,
	insertToLinkedList,
	linkedListToArray,
} from "./linked-list.helpers.js";

import type { Utils } from "../types/utils.types.js";

test("testing arrayToLinkedList helper", () => {
	const test1 = {
		response: arrayToLinkedList([1, 2, 3]),
		expected: {
			head: { val: 1, next: { val: 2, next: { val: 3, next: null } } },
		} as const,
	};

	expect(test1.response).toStrictEqual(test1.expected);

	expectTypeOf<Utils.deepReadonly<typeof test1.response>>(
		test1.response,
	).toEqualTypeOf(test1.expected);

	const test2 = {
		response: arrayToLinkedList([]),
		expected: { head: null } as const,
	};

	expect(test2.response).toStrictEqual(test2.expected);

	expectTypeOf<Utils.deepReadonly<typeof test2.response>>(
		test2.response,
	).toEqualTypeOf(test2.expected);
});

test("testing insertToLinkedList helper", () => {
	const test1 = {
		list: {
			head: { val: 1, next: { val: 2, next: { val: 3, next: null } } },
		} as const,
		expected: {
			head: {
				val: 1,
				next: { val: 2, next: { val: 3, next: { val: 4, next: null } } },
			},
		} as const,
	};
	const response1 = insertToLinkedList(test1.list, 4);

	expect(response1).toStrictEqual(test1.expected);

	expectTypeOf<Utils.deepReadonly<typeof response1>>(response1).toEqualTypeOf(
		test1.expected,
	);

	const test2 = {
		list: { head: null } as const,
		expected: { head: { val: 1, next: null } } as const,
	};
	const response2 = insertToLinkedList(test2.list, 1);

	expect(response2).toStrictEqual(test2.expected);

	expectTypeOf<Utils.deepReadonly<typeof response2>>(response2).toEqualTypeOf(
		test2.expected,
	);
});

test("testing insertNodeToLinkedList helper", () => {
	const test1 = {
		list: arrayToLinkedList([1, 2, 3] as number[]),
		expected: arrayToLinkedList([1, 2, 3, 2] as number[]),
	};
	const response1 = insertNodeToLinkedList(test1.list, { val: 2, next: null });

	expect(response1).toStrictEqual(test1.expected);

	expectTypeOf(response1).toEqualTypeOf(test1.expected);

	const list2 = arrayToLinkedList([1, 2, 3] as number[]);
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	const response2 = insertNodeToLinkedList(list2, list2.head!.next);
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	list2.head!.next!.next!.next = list2.head!.next;

	expect(response2).toStrictEqual(list2);

	expectTypeOf(response2).toEqualTypeOf(list2);
});

test("testing linkedListToArray helper", () => {
	const test1 = {
		response: linkedListToArray({
			head: { next: { next: { next: null, val: 3 }, val: 2 }, val: 1 },
		}),
		expected: [1, 2, 3] as const,
	};

	expect(test1.response).toStrictEqual(test1.expected);

	expectTypeOf<Utils.deepReadonly<typeof test1.response>>(
		test1.response,
	).toEqualTypeOf(test1.expected);

	const test2 = {
		response: linkedListToArray({ head: null }),
		expected: [] as const,
	};

	expect(test2.response).toStrictEqual(test2.expected);

	expectTypeOf<Utils.deepReadonly<typeof test2.response>>(
		test2.response,
	).toEqualTypeOf(test2.expected);
});
