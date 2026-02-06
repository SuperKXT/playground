// https://leetcode.com/problems/reverse-vowels-of-a-string

const vowels = ["a", "e", "i", "o", "u"] as const;
const vowelSet = new Set([...vowels, ...vowels.map((r) => r.toUpperCase())]);

type TVowel = (typeof vowels)[number];

type TStrToTuple<S extends string> = S extends `${infer first}${infer rest}`
	? [first, ...TStrToTuple<rest>]
	: [];

type TReverseVowels<
	S extends string,
	Tup extends string[] = TStrToTuple<S>,
> = Tup extends [
	infer first extends string,
	...infer rest extends string[],
	infer last extends string,
]
	? Lowercase<first | last> extends TVowel
		? `${last}${TReverseVowels<never, rest>}${first}`
		: `${Lowercase<first> extends TVowel ? "" : first}${TReverseVowels<never, [...(Lowercase<first> extends TVowel ? [first] : []), ...rest, ...(Lowercase<last> extends TVowel ? [last] : [])]>}${Lowercase<last> extends TVowel ? "" : last}`
	: Tup[0] extends string
		? Tup[0]
		: "";

// export const reverseVowels = <S extends string>(s: S): TReverseVowels<S> => {
//     let direction: 'left' | 'right' = 'left';
//     let leftVowel = '';
//     let str = {
//         left: '',
//         right: '',
//     };
//     const idx = {
//         left: 0,
//         right: s.length - 1,
//     };
//     while (idx.left <= idx.right) {
//         const curr = s[idx[direction]] as string;
//         if (vowelSet.has(curr as never)) {
//             if (direction === 'right') {
//                 direction = 'left';
//                 str.left += curr;
//                 str.right = `${leftVowel}${str.right}`;
//                 leftVowel = '';
//                 idx.right--;
//             }
//             else {
//                 direction = 'right';
//                 leftVowel = curr;
//                 idx.left++;
//             }
//         }
//         else {
//             if (direction === 'right') {
//                 str.right = `${curr}${str.right}`;
//                 idx.right--;
//             }
//             else {
//                 str.left += curr;
//                 idx.left++;
//             }
//         }
//     }

//     return (str.left + leftVowel + str.right) as never;
// };

export const reverseVowels = <S extends string>(s: S): TReverseVowels<S> => {
	const str = {
		left: "",
		right: "",
	};
	const idx = {
		left: 0,
		right: s.length - 1,
	};
	while (idx.left <= idx.right) {
		const left = s[idx.left] as string;
		const right = s[idx.right] as string;
		if (idx.left === idx.right) {
			str.left += left;
			idx.left++;
		} else if (vowelSet.has(left) && vowelSet.has(right)) {
			str.left += right;
			str.right = `${left}${str.right}`;
			idx.left++;
			idx.right--;
		} else {
			if (!vowelSet.has(left)) {
				str.left += left;
				idx.left++;
			}
			if (!vowelSet.has(right)) {
				str.right = `${right}${str.right}`;
				idx.right--;
			}
		}
	}

	return (str.left + str.right) as never;
};
