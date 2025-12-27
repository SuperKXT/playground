// https://leetcode.com/problems/positions-of-large-groups

type TCoord = [number, number];

type TCurr = { char: string; start: number };

type TTCheck = { char: string; start: number; length: Array<1> };

type TLengthMinusOne<T extends unknown[]> = T extends [unknown, ...infer rest]
	? rest["length"]
	: 0;

type TLargeGroupPositions<
	S extends string,
	idx extends Array<1> = [],
	res extends TCoord[] = [],
	curr extends null | TTCheck = null,
> = S extends `${infer first}${infer rest}`
	? curr extends TTCheck
		? first extends curr["char"]
			? TLargeGroupPositions<
					rest,
					[...idx, 1],
					res,
					{ char: first; start: curr["start"]; length: [...curr["length"], 1] }
				>
			: TLargeGroupPositions<
					rest,
					[...idx, 1],
					curr["length"]["length"] extends 0 | 1 | 2
						? res
						: [...res, [curr["start"], TLengthMinusOne<idx>]],
					{
						char: first;
						start: idx["length"];
						length: [1];
					}
				>
		: TLargeGroupPositions<
				rest,
				[...idx, 1],
				res,
				{ char: first; start: TLengthMinusOne<idx>; length: [] }
			>
	: res;

const checkInterval = (
	curr: TCurr | null,
	end: number,
	intervals: TCoord[],
): void => {
	if (!curr) return;
	if (end - curr.start >= 2) intervals.push([curr.start, end]);
};

export const largeGroupPositions = <S extends string>(
	s: S,
): TLargeGroupPositions<S> => {
	const intervals: TCoord[] = [];
	let curr: null | TCurr = null;
	for (let i = 0; i < s.length; i++) {
		const char = s[i] as string;
		// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
		if (curr === null || curr.char !== char) {
			checkInterval(curr, i - 1, intervals);
			curr = { start: i, char };
		}
	}
	checkInterval(curr, s.length - 1, intervals);
	return intervals as never;
};
