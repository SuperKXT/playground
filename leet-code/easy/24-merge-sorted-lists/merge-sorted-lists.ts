// https://leetcode.com/problems/merge-two-sorted-lists

import type { TLinkedListNode } from "../../../helpers/linked-list.helpers.js";

type TNode = TLinkedListNode<number>;

type TTuple<
	size extends number,
	res extends unknown[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TNumberToTuple<
	Num extends number,
	str extends string = `${Num}`,
	tup extends number[] = [],
> = str extends `${"-" | "+"}${infer rest}`
	? TNumberToTuple<never, rest, tup>
	: str extends `${infer first extends number}${infer rest}`
		? TNumberToTuple<never, rest, [...tup, first]>
		: tup;

type TCompareDigits<
	digitA extends number,
	digitB extends number,
	tupA extends unknown[] = TTuple<digitA>,
	tupB extends unknown[] = TTuple<digitB>,
> = digitA extends digitB
	? "equal"
	: tupA[tupB["length"]] extends 1
		? "greater"
		: "lesser";

type _TCompareNumbers<
	tupA extends unknown[],
	tupB extends unknown[],
> = tupA["length"] extends tupB["length"]
	? [tupA, tupB] extends [
			[infer firstA extends number, ...infer restA],
			[infer firstB extends number, ...infer restB],
		]
		? TCompareDigits<firstA, firstB> extends infer res
			? res extends "equal"
				? _TCompareNumbers<restA, restB>
				: res
			: never
		: never
	: tupA[tupB["length"]] extends number
		? "greater"
		: "lesser";
type TCompareNumbers<
	numA extends number,
	numB extends number,
> = numA extends numB
	? "equal"
	: `${numA}` extends `-${string}`
		? `${numB}` extends `-${string}`
			? _TCompareNumbers<
					TNumberToTuple<numA>,
					TNumberToTuple<numB>
				> extends "greater"
				? "lesser"
				: "greater"
			: "lesser"
		: `${numB}` extends `-${string}`
			? "greater"
			: _TCompareNumbers<TNumberToTuple<numA>, TNumberToTuple<numB>>;

type TMergeSortedLists<List1 extends TNode, List2 extends TNode> =
	List1 extends NonNullable<TNode>
		? List2 extends NonNullable<TNode>
			? TCompareNumbers<List1["val"], List2["val"]> extends "greater"
				? {
						val: List2["val"];
						next: TMergeSortedLists<List1, List2["next"]>;
					}
				: {
						val: List1["val"];
						next: TMergeSortedLists<List1["next"], List2>;
					}
			: {
					val: List1["val"];
					next: TMergeSortedLists<List1["next"], null>;
				}
		: List2 extends NonNullable<TNode>
			? {
					val: List2["val"];
					next: TMergeSortedLists<null, List2["next"]>;
				}
			: List1;

export const mergeSortedLists = <List1 extends TNode, List2 extends TNode>(
	list1: List1,
	list2: List2,
): TMergeSortedLists<List1, List2> => {
	let node1: TNode = list1;
	let node2: TNode = list2;
	if (!node1 && !node2) return null as never;
	const res: TNode = {
		val: Math.min(node1?.val ?? Infinity, node2?.val ?? Infinity),
		next: null,
	};
	let curr = res;

	if (res.val === node1?.val) node1 = node1.next;
	else if (node2) node2 = node2.next;

	while (node1 || node2) {
		curr.next = {
			val: Math.min(node1?.val ?? Infinity, node2?.val ?? Infinity),
			next: null,
		};
		if (curr.next.val === node1?.val) node1 = node1.next;
		else if (node2) node2 = node2.next ?? null;
		curr = curr.next;
	}

	return res as never;
};
