// https://leetcode.com/problems/min-cost-climbing-stairs

type TStringToTuple<S extends string> = S extends `${infer first}${infer rest}`
	? [first, ...TStringToTuple<rest>]
	: [];

type TIsAlphabet<S extends string> =
	Uppercase<S> extends Lowercase<S> ? false : true;

type TFindRight<
	tup extends string[],
	left extends string,
	right extends string = "",
> = tup extends [...infer rest extends string[], infer last extends string]
	? TIsAlphabet<last> extends true
		? { tup: rest; left: last; right: `${left}${right}` }
		: TFindRight<rest, left, `${last}${right}`>
	: { tup: []; left: left; right: right };

type _TReverseOnlyLetters<
	tup extends string[],
	left extends string,
	right extends string,
> = tup extends [infer first extends string, ...infer rest extends string[]]
	? TIsAlphabet<first> extends true
		? TFindRight<rest, first> extends infer res extends {
				tup: string[];
				left: string;
				right: string;
			}
			? _TReverseOnlyLetters<
					res["tup"],
					`${left}${res["left"]}`,
					`${res["right"]}${right}`
				>
			: never
		: _TReverseOnlyLetters<rest, `${left}${first}`, right>
	: `${left}${right}`;

type TReverseOnlyLetters<S extends string> = _TReverseOnlyLetters<
	TStringToTuple<S>,
	"",
	""
>;

const isAlphabet = (s: string): boolean => {
	return s.toLowerCase() !== s.toUpperCase();
};

export const reverseOnlyLetters = <S extends string>(
	s: S,
): TReverseOnlyLetters<S> => {
	let leftIdx = 0;
	let rightIdx = s.length - 1;
	let left = "";
	let right = "";
	while (leftIdx < rightIdx) {
		const leftCurr = s[leftIdx] as string;
		if (isAlphabet(leftCurr)) {
			while (rightIdx >= leftIdx) {
				const rightCurr = s[rightIdx] as string;
				if (leftIdx === rightIdx) {
					left += leftCurr;
					rightIdx--;
					break;
				}
				if (isAlphabet(rightCurr)) {
					left += rightCurr;
					right = leftCurr + right;
					rightIdx--;
					break;
				} else {
					right = rightCurr + right;
					rightIdx--;
				}
			}
		} else {
			left += leftCurr;
		}
		leftIdx++;
	}
	return (left +
		(leftIdx === rightIdx ? (s[leftIdx] as string) : "") +
		right) as never;
};
