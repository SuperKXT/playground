// https://leetcode.com/problems/count-binary-substrings

type TLessOrEqualLength<A extends unknown[], B extends unknown[]> = B extends [
	...A,
	...unknown[],
]
	? true
	: false;

type TUpdateCounts<
	counts extends Record<"0" | "1", Array<1>>,
	char extends "0" | "1",
	count extends Array<1>,
> = {
	"0": char extends "0" ? count : counts["0"];
	"1": char extends "1" ? count : counts["1"];
};

type TCountBinarySubstrings<
	S extends string,
	last extends "0" | "1" | null = null,
	counts extends Record<"0" | "1", Array<1>> = Record<"0" | "1", []>,
	total extends Array<1> = [],
> = S extends `${infer char extends "0" | "1"}${infer rest}`
	? last extends null
		? TCountBinarySubstrings<rest, "0", TUpdateCounts<counts, char, [1]>, total>
		: char extends last
			? TCountBinarySubstrings<
					rest,
					char,
					TUpdateCounts<counts, char, [...total, 1]>,
					TLessOrEqualLength<
						counts[char],
						counts[char extends "0" ? "1" : "0"]
					> extends true
						? [...total, 1]
						: total
				>
			: TCountBinarySubstrings<
					rest,
					char,
					TUpdateCounts<counts, char, [1]>,
					TLessOrEqualLength<
						counts[char],
						counts[char extends "0" ? "1" : "0"]
					> extends true
						? [...total, 1]
						: total
				>
	: total["length"];

export const countBinarySubstrings = <S extends string>(
	s: S,
): TCountBinarySubstrings<S> => {
	const counts = { 0: 0, 1: 0 };
	let last: "0" | "1" | null = null;
	let count = 0;
	for (const char of s) {
		if (char !== "0" && char !== "1") throw new Error("invalid string");
		if (last && char !== last) {
			counts[char] = 0;
		}
		counts[char]++;
		if (counts[char] <= counts[char === "0" ? "1" : "0"]) count++;
		last = char;
	}
	return count as never;
};
