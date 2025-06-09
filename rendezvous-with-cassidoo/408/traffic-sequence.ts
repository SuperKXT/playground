type TTrafficLight = "red" | "green" | "yellow";

const validMap = {
	red: "green",
	green: "yellow",
	yellow: "red",
} as const satisfies Record<TTrafficLight, TTrafficLight>;

export const isValidTrafficSequence = (sequence: TTrafficLight[]): boolean => {
	const [first, ...rest] = sequence;
	if (!first) return true;
	let last = first;
	for (const curr of rest) {
		if (validMap[last] !== curr) return false;
		last = curr;
	}
	return true;
};
