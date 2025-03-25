type TNextCurrent<current extends 1[], first> = first extends true
	? [...current, 1]
	: [];

type TFindLongestStreak<
	Arr extends boolean[],
	Minimum extends number,
	current extends 1[] = [],
	longest extends 1[] = [],
> = Arr extends [infer first, ...infer rest extends boolean[]]
	? TNextCurrent<current, first> extends infer next extends 1[]
		? TFindLongestStreak<
				rest,
				Minimum,
				next,
				[...next, 1][Minimum] extends 1
					? next[longest["length"]] extends 1
						? next
						: longest
					: longest
			>
		: never
	: longest["length"];

export const findLongestStreak = <
	const Arr extends boolean[],
	Minimum extends number,
>(
	array: Arr,
	minimumLength: Minimum,
): TFindLongestStreak<Arr, Minimum> => {
	let currentStreak = 0;
	let longestStreak = 0;
	for (const val of array) {
		if (!val) {
			currentStreak = 0;
		} else {
			currentStreak++;
		}
		if (currentStreak >= minimumLength && currentStreak > longestStreak)
			longestStreak = currentStreak;
	}
	return longestStreak as never;
};
