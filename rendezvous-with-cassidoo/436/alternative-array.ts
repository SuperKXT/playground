type TAlternativeArray<
	Arr extends number[],
	last extends Record<"even" | "odd", number | undefined> = Record<
		"even" | "odd",
		undefined
	>,
	curr extends "even" | "odd" = "even",
> = Arr extends [infer first extends number, ...infer rest extends number[]]
	? last[curr] extends undefined | first
		? TAlternativeArray<
				rest,
				{
					even: curr extends "even" ? first : last["even"];
					odd: curr extends "odd" ? first : last["odd"];
				},
				curr extends "even" ? "odd" : "even"
			>
		: false
	: true;

export const alternativeArray = <const Arr extends number[]>(
	arr: Arr,
): TAlternativeArray<Arr> => {
	const last: Record<"even" | "odd", number | undefined> = {
		even: undefined,
		odd: undefined,
	};
	let curr: "even" | "odd" = "even";
	for (const num of arr) {
		if (last[curr] !== undefined && last[curr] !== num) return false as never;
		last[curr] = num;
		curr = curr === "even" ? "odd" : "even";
	}
	return true as never;
};
