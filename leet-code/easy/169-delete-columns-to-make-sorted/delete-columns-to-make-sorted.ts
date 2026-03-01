// https://leetcode.com/problems/delete-columns-to-make-sorted

type TAlphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

type TIsLessOrEqual<
	A extends string,
	B extends string,
	Alpha extends string[] = TAlphabet,
> = A extends B
	? true
	: Alpha extends [infer first extends string, ...infer rest extends string[]]
		? first extends A
			? true
			: first extends B
				? false
				: TIsLessOrEqual<A, B, rest>
		: false;

type TIsColumnSorted<Strings extends string[]> = Strings extends [
	infer first extends string,
	infer second extends string,
	...infer rest extends string[],
]
	? first extends `${infer a}${string}`
		? second extends `${infer b}${string}`
			? TIsLessOrEqual<a, b> extends true
				? TIsColumnSorted<[second, ...rest]>
				: false
			: true
		: true
	: true;

type TAdvance<Strings extends string[]> = Strings extends [
	infer S extends string,
	...infer rest extends string[],
]
	? [S extends `${string}${infer str}` ? str : never, ...TAdvance<rest>]
	: [];

type TDeleteColumnsToMakeSorted<
	Strings extends string[],
	total extends Array<1> = [],
> = Strings extends []
	? total["length"]
	: Strings[0] extends ""
		? total["length"]
		: TIsColumnSorted<Strings> extends true
			? TDeleteColumnsToMakeSorted<TAdvance<Strings>, total>
			: TDeleteColumnsToMakeSorted<TAdvance<Strings>, [...total, 1]>;

export const deleteColumnsToMakeSorted = <const Strings extends string[]>(
	strings: Strings,
): TDeleteColumnsToMakeSorted<Strings> => {
	const length = strings[0]?.length ?? 0;
	let count = 0;
	for (let i = 0; i < length; i++) {
		let last = strings[0]?.[i] as string;
		for (let j = 1; j < strings.length; j++) {
			const curr = strings[j]?.[i] as string;
			if (curr.localeCompare(last) < 0) {
				count++;
				break;
			}
			last = curr;
		}
	}
	return count as never;
};
