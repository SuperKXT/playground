// https://leetcode.com/problems/counting-bits

const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"] as const;
type TVowels = (typeof vowels)[number];
const vowelSet = new Set<string>(vowels);

type TStringTuple<S extends string> = S extends `${infer first}${infer rest}`
	? [first, ...TStringTuple<rest>]
	: [];

type TReverseVowels<
	S extends string,
	tuple extends string[] = TStringTuple<S>,
	left extends string = "",
	right extends string = "",
	toReplace extends string | undefined = undefined,
> = toReplace extends string
	? tuple extends [...infer rest extends string[], infer last extends string]
		? last extends TVowels
			? TReverseVowels<never, rest, `${left}${last}`, `${toReplace}${right}`>
			: TReverseVowels<never, rest, left, `${last}${right}`, toReplace>
		: `${left}${right}`
	: tuple extends [infer first extends string, ...infer rest extends string[]]
		? first extends TVowels
			? TReverseVowels<never, rest, left, right, first>
			: TReverseVowels<never, rest, `${left}${first}`, right>
		: `${left}${right}`;

// export const reverseVowels = <S extends string>(s: S): TReverseVowels<S> => {
// 	let start = 0;
// 	let end = s.length - 1;
// 	let toReplace: string | undefined = undefined;
// 	const res = s.split("");
// 	while (start < end) {
// 		if (toReplace) {
// 			const curr = res[end] as string;
// 			if (vowelSet.has(curr)) {
// 				res[start] = curr;
// 				res[end] = toReplace;
// 				toReplace = undefined;
// 				start++;
// 			}
// 			end--;
// 		} else {
// 			const curr = res[start] as string;
// 			if (vowelSet.has(curr)) {
// 				toReplace = curr;
// 			} else {
// 				start++;
// 			}
// 		}
// 	}
// 	return res.join("") as never;
// };

export const reverseVowels = <S extends string>(s: S): TReverseVowels<S> => {
	let start = 0;
	let end = s.length - 1;
	let toReplace: string | undefined = undefined;
	let left = "";
	let right = "";
	while (start < end) {
		if (toReplace) {
			const curr = s[end] as string;
			if (vowelSet.has(curr)) {
				left += curr;
				right = `${toReplace}${right}`;
				toReplace = undefined;
				start++;
			} else {
				right = `${curr}${right}`;
			}
			end--;
		} else {
			const curr = s[start] as string;
			if (vowelSet.has(curr)) {
				toReplace = curr;
			} else {
				left += curr;
				start++;
			}
		}
	}
	left += s[start] as string;
	return `${left}${right}` as never;
};
