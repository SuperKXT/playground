type TTrafficLight = "red" | "green" | "yellow";

const validMap = {
	red: "green",
	green: "yellow",
	yellow: "red",
} as const satisfies Record<TTrafficLight, TTrafficLight>;

type TIsValidTrafficSequence<T extends TTrafficLight[]> = T extends [
	infer first extends TTrafficLight,
	infer second extends TTrafficLight,
	...infer rest extends TTrafficLight[],
]
	? (typeof validMap)[first] extends second
		? TIsValidTrafficSequence<[second, ...rest]>
		: false
	: true;

export const isValidTrafficSequence = <const Sequence extends TTrafficLight[]>(
	sequence: Sequence,
): TIsValidTrafficSequence<Sequence> => {
	const [first, ...rest] = sequence;
	let last = first as TTrafficLight;
	for (const curr of rest) {
		if (validMap[last] !== curr) return false as never;
		last = curr;
	}
	return true as never;
};
