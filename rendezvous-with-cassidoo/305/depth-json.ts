import type { Utils } from "../../types/utils.types.js";

type TFill<T extends number, A extends number[] = []> = A["length"] extends T
	? A
	: TFill<T, [...A, 1]>;

type TShift<T extends number[]> = T extends [
	unknown,
	...infer R extends number[],
]
	? R
	: never;

type TNumberToArray<
	T extends number,
	R extends string = `${T}`,
	A extends number[] = [],
> = R extends `${infer F extends number}${infer L}`
	? TNumberToArray<T, L, [...A, F]>
	: A;

type TGreaterThanDigits<
	T extends number[],
	U extends number[],
	TF extends number[] = TFill<T[0]>,
	UF extends number[] = TFill<U[0]>,
> = T["length"] extends 0
	? false
	: T[0] extends U[0]
		? TGreaterThanDigits<TShift<T>, TShift<U>>
		: UF[TF["length"]] extends undefined
			? true
			: false;

type TLastInUnion<T> =
	Utils.unionToIntersection<T extends unknown ? (x: T) => 0 : never> extends (
		x: infer U,
	) => 0
		? U
		: never;

type TGreaterThan<
	T extends number,
	U extends number,
	TA extends number[] = TNumberToArray<T>,
	UA extends number[] = TNumberToArray<U>,
> = T extends U
	? false
	: TA["length"] extends UA["length"]
		? TGreaterThanDigits<TA, UA>
		: UA[TA["length"]] extends undefined
			? true
			: false;

type TMax<
	T extends number,
	M extends number = 0,
	last extends number = TLastInUnion<T> & number,
> = [T] extends [never]
	? M
	: TMax<Exclude<T, last>, TGreaterThan<last, M> extends true ? last : M>;

export type TDepthJson<
	T,
	Depth extends number = 0,
	Tup extends unknown[] = Utils.tuple<Depth>,
	NextDepth extends number = [...Tup, 1]["length"],
> = T extends object
	? TMax<
			| NextDepth
			| {
					[k in Exclude<keyof T, keyof unknown[]>]: TDepthJson<T[k], NextDepth>;
			  }[Exclude<keyof T, keyof unknown[]>]
		>
	: Depth;

export const depthJson = <const T>(json: T): TDepthJson<T> => {
	try {
		let maxDepth = 0;
		const curr: { stack: string[]; depth: number } = { stack: [], depth: 0 };
		for (const char of JSON.stringify(json)) {
			if (["[", "{"].includes(char)) {
				curr.stack.push(char);
				curr.depth++;
			} else if (["]", "}"].includes(char)) {
				curr.stack.pop();
				maxDepth = Math.max(maxDepth, curr.depth);
				curr.depth--;
			}
		}
		return maxDepth as never;
	} catch {
		return 0 as never;
	}
};
