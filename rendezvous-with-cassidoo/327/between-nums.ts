type TTuple<
	num extends number,
	tup extends 1[] = [],
> = tup["length"] extends num ? tup : TTuple<num, [...tup, 1]>;

type TRemoveN<
	tup extends 1[],
	n extends number,
	idx extends 1[] = [],
> = idx["length"] extends n
	? tup
	: tup extends [1, ...infer rest extends 1[]]
		? TRemoveN<rest, n, [...idx, 1]>
		: [];

type TDivisible<
	num extends number,
	by extends number,
	tup extends 1[] = TTuple<num>,
	idx extends 1[] = [],
> = tup extends []
	? true
	: [...tup, 1][by] extends undefined
		? false
		: TDivisible<never, by, TRemoveN<tup, by>, [...idx, 1]>;

type TIsPrime<num extends number, idx extends 1[] = [1, 1]> = num extends 0
	? false
	: num extends 1
		? true
		: idx["length"] extends num
			? true
			: TDivisible<num, idx["length"]> extends true
				? false
				: TIsPrime<num, [...idx, 1]>;

type TIsOdd<
	num extends number,
	tup extends unknown[] = TTuple<num>,
> = tup extends [unknown, unknown, ...infer rest]
	? TIsOdd<never, rest>
	: tup["length"] extends 1
		? true
		: false;

type TIsEven<num extends number> = TIsOdd<num> extends true ? false : true;

type TCheckNum<
	num extends number,
	check extends "even" | "odd" | "prime",
> = check extends "even"
	? TIsEven<num>
	: check extends "odd"
		? TIsOdd<num>
		: TIsPrime<num>;

type TBetweenNums<
	first extends number,
	second extends number,
	check extends "even" | "odd" | "prime",
	firstTup extends 1[] = TTuple<first>,
	secondTup extends 1[] = TTuple<second>,
	start extends 1[] = firstTup[secondTup["length"]] extends 1
		? secondTup
		: firstTup,
	end extends 1[] = firstTup[secondTup["length"]] extends 1
		? firstTup
		: secondTup,
	idx extends 1[] = [1],
	result extends number[] = [],
	curr extends number = [...start, ...idx]["length"],
> = curr extends end["length"]
	? result
	: TBetweenNums<
			never,
			never,
			check,
			never,
			never,
			start,
			end,
			[...idx, 1],
			[...result, ...(TCheckNum<curr, check> extends true ? [curr] : [])]
		>;

const isPrime = (num: number) => {
	for (let i = 2; i < Math.sqrt(num); i += 2) if (num % i === 0) return false;
	return true;
};

export const betweenNums = <
	First extends number,
	Second extends number,
	Check extends "even" | "odd" | "prime",
>(
	first: First,
	second: Second,
	check: Check,
): TBetweenNums<First, Second, Check> => {
	const result: number[] = [];
	for (let i = Math.min(first, second) + 1; i < Math.max(first, second); i++) {
		switch (check) {
			case "even":
				if (i % 2 === 0) result.push(i);
				break;
			case "odd":
				if (i % 2 !== 0) result.push(i);
				break;
			case "prime":
				if (isPrime(i)) result.push(i);
				break;
		}
	}
	return result as never;
};
