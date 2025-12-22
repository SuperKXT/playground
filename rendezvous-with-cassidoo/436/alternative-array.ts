export const alternativeArray = (arr: number[]): boolean => {
	const last: Record<"even" | "odd", number | undefined> = {
		even: undefined,
		odd: undefined,
	};
	let curr: "even" | "odd" = "even";
	for (const num of arr) {
		if (last[curr] !== undefined && last[curr] !== num) return false;
		last[curr] = num;
		curr = curr === "even" ? "odd" : "even";
	}
	return true;
};
