// https://leetcode.com/problems/remove-outermost-parentheses

type TPop<Arr extends unknown[]> = Arr extends [unknown, ...infer rest]
	? rest
	: Arr;

type TRemoveOuterParens<
	S extends string,
	count extends Array<1> = [],
	res extends string = "",
> = S extends `${infer first}${infer rest}`
	? TRemoveOuterParens<
			rest,
			first extends "("
				? [...count, 1]
				: first extends ")"
					? TPop<count>
					: count,
			[first, count] extends ["(", []] | [")", [1]] ? res : `${res}${first}`
		>
	: res;

export const removeOuterParentheses = <S extends string>(
	s: S,
): TRemoveOuterParens<S> => {
	let level = 0;
	let res = "";
	for (const char of s) {
		if (char === ")") {
			level--;
			if (level !== 0) res += char;
		} else if (char === "(") {
			if (level !== 0) res += char;
			level++;
		} else res += char;
	}
	return res as never;
};
