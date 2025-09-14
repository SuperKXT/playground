import type { Utils } from "../types/utils.types.js";

export type TLinkedListNode<Type = unknown> = {
	val: Type;
	next: TLinkedListNode<Type>;
} | null;

export type TLinkedList<Type> = {
	head: TLinkedListNode<Type>;
};

type TInsertToNode<
	Node extends NonNullable<TLinkedListNode>,
	Val,
> = Utils.prettify<{
	val: Node["val"];
	next: Node["next"] extends NonNullable<TLinkedListNode>
		? TInsertToNode<Node["next"], Val>
		: { val: Val; next: null };
}>;

type TInsertNode<List extends TLinkedList<unknown>, Val> = Utils.prettify<{
	head: List["head"] extends NonNullable<TLinkedListNode>
		? TInsertToNode<List["head"], Val>
		: { val: Val; next: null };
}>;

type TArrayToLinkedList<
	Type extends readonly unknown[],
	Result extends TLinkedList<unknown> = { head: null },
> = number extends Type["length"]
	? TLinkedList<Type[number]>
	: Type extends readonly [infer First, ...infer Rest]
		? TArrayToLinkedList<Rest, TInsertNode<Result, First>>
		: Result;

export const arrayToLinkedList = <const Arr extends readonly unknown[]>(
	array: Arr,
): TArrayToLinkedList<Arr> => {
	const list: TLinkedList<unknown> = {
		head: null,
	};
	let lastNode: TLinkedListNode = null;

	for (const item of array) {
		const node: TLinkedListNode = {
			next: null,
			val: item,
		};

		if (!list.head) {
			list.head = node;
			lastNode = list.head;
		} else if (lastNode) {
			lastNode.next = node;
			lastNode = node;
		}
	}

	return list as TArrayToLinkedList<Arr>;
};

export const insertToLinkedList = <
	List extends TLinkedList<unknown>,
	const Val,
>(
	list: List,
	val: Val,
): TInsertNode<List, Val> => {
	const newNode = { val, next: null };
	if (!list.head) {
		list.head = newNode;
	} else {
		const insertNode = (node: NonNullable<TLinkedListNode>) => {
			if (node.next) insertNode(node.next);
			else node.next = newNode;
		};
		insertNode(list.head);
	}
	return list as TInsertNode<List, Val>;
};

export const insertNodeToLinkedList = <Val>(
	list: NonNullable<TLinkedList<Val>>,
	val: TLinkedListNode<Val>,
): NonNullable<TLinkedList<Val>> => {
	let curr = list.head;
	if (!curr) {
		list.head = val;
		return list;
	}
	while (curr.next) curr = curr.next;
	curr.next = val;
	return list;
};
