type TTuple<
	size extends number,
	res extends 1[] = [],
> = res["length"] extends size ? res : TTuple<size, [...res, 1]>;

type TIncrementMap<
	T extends Record<number, number>,
	num extends number,
> = num extends keyof T
	? {
			[k in keyof T]: T[k] extends num
				? [...TTuple<T[k]>, 1]["length"] & number
				: T[k];
		}
	: T & Record<num, 1>;

type TIsEven<
	num extends number,
	tup extends unknown[] = TTuple<num>,
> = tup extends []
	? true
	: tup extends [1, 1, ...infer rest]
		? TIsEven<never, rest>
		: false;

type TMajority<
	input extends number[],
	map extends Record<number, number> = {},
	most extends 1[] = [],
	winner extends number = never,
	evens extends 1[] = [],
	odds extends 1[] = [],
> = input extends [infer first extends number, ...infer rest extends number[]]
	? TIncrementMap<map, first> extends infer newMap extends Record<
			number,
			number
		>
		? TMajority<
				rest,
				newMap,
				[...most, 1][newMap[first]] extends undefined
					? TTuple<newMap[first]>
					: most,
				[...most, 1][newMap[first]] extends undefined
					? first
					: newMap[first] extends most["length"]
						? never
						: winner,
				TIsEven<first> extends true ? [...evens, 1] : evens,
				TIsEven<first> extends false ? [...odds, 1] : odds
			>
		: never
	: [winner] extends [never]
		? evens["length"] extends odds["length"]
			? "none"
			: evens[odds["length"]] extends 1
				? "evens"
				: "odds"
		: winner;

export const majority = <const Input extends number[]>(
	input: Input,
): TMajority<Input> => {
	let curr = { num: Infinity, count: 0 };
	let mostCount = 0;
	let winner: undefined | number = undefined;
	const count = { even: 0, odd: 0 };
	for (const num of input.sort((a, b) => a - b)) {
		count[num % 2 === 0 ? "even" : "odd"]++;
		if (curr.num !== num) {
			if (mostCount < curr.count) {
				mostCount = curr.count;
				winner = curr.num;
			} else if (mostCount === curr.count) {
				winner = undefined;
			}
			curr = { num, count: 1 };
		} else {
			curr.count++;
		}
	}
	if (winner) return winner as never;
	if (count.even === count.odd) return "none" as never;
	return (count.even > count.odd ? "evens" : "odds") as never;
};
