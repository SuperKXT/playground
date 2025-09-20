// https://leetcode.com/problems/summary-ranges

type TDigitMap = {
	0: 1;
	1: 2;
	2: 3;
	3: 4;
	4: 5;
	5: 6;
	6: 7;
	7: 8;
	8: 9;
	9: 0;
};

type TRange = { start: number; end: number };

type TNumberToArray<
	Num extends number,
	str extends string = `${Num}`,
> = str extends `${infer first extends number}${infer rest}`
	? [first, ...TNumberToArray<Num, rest>]
	: [];

type TArrayToStr<Num extends number[]> = Num extends [
	infer first extends number,
	...infer rest extends number[],
]
	? `${first}${TArrayToStr<rest>}`
	: "";

export type TPlusOne<Nums extends number[]> = Nums extends [
	...infer rest extends number[],
	infer last extends keyof TDigitMap,
]
	? last extends 9
		? `${TDigitMap[last]}${TPlusOne<rest>}`
		: `${TArrayToStr<rest>}${TDigitMap[last]}`
	: "1";

type TRangeString<Range extends TRange> = Range["start"] extends Range["end"]
	? `${Range["start"]}`
	: `${Range["start"]}->${Range["end"]}`;

type TSummaryRanges<
	Nums extends number[],
	curr extends undefined | TRange = undefined,
	ranges extends string[] = [],
> = Nums extends [infer first extends number, ...infer rest extends number[]]
	? curr extends TRange
		? TPlusOne<TNumberToArray<curr["end"]>> extends `${first}`
			? TSummaryRanges<rest, { start: curr["start"]; end: first }, ranges>
			: TSummaryRanges<
					rest,
					{ start: first; end: first },
					[...ranges, TRangeString<curr>]
				>
		: TSummaryRanges<rest, { start: first; end: first }, ranges>
	: curr extends TRange
		? [...ranges, TRangeString<curr>]
		: ranges;

type _ = TPlusOne<[0, 1, 2, 4, 5, 7]>;
//   ^?

export const summaryRanges = <const Nums extends number[]>(
	nums: Nums,
): TSummaryRanges<Nums> => {
	let curr: undefined | TRange = undefined;
	const ranges: string[] = [];
	for (const num of nums) {
		if (!curr || curr.end + 1 !== num) {
			if (curr)
				ranges.push(
					curr.start === curr.end
						? String(curr.start)
						: `${curr.start}->${curr.end}`,
				);
			curr = { start: num, end: num };
		}
		curr.end = num;
	}
	if (curr)
		ranges.push(
			curr.start === curr.end
				? String(curr.start)
				: `${curr.start}->${curr.end}`,
		);
	return ranges as never;
};
