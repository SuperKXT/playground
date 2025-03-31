const getMinutes = (time: string): number => {
	const parts = time.split(":");
	const hours = parseInt(parts[0] ?? "");
	const mins = parseInt(parts[1] ?? "");
	if (isNaN(hours) || isNaN(mins)) throw new Error("Invalid input");
	return hours * 60 + mins;
};

export const findLongestTimeGap = ([first, ...rest]: [
	string,
	...string[],
]): number => {
	let longestGap = 0;
	let last = getMinutes(first);
	for (const val of rest) {
		const curr = getMinutes(val);
		const currGap = Math.abs(curr - last);
		if (currGap > longestGap) longestGap = currGap;
		last = curr;
	}
	return longestGap;
};
