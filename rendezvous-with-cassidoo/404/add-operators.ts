const getCombinations = (
	[first, ...rest]: string[],
	curr: string = "",
): string[] => {
	if (first === undefined) return [];
	if (rest[0] === undefined) return [`${curr}+${first}`, `${curr}*${first}`];
	if (!curr) return getCombinations(rest, String(first));
	return [
		...getCombinations(rest, `${curr}+${first}`),
		...getCombinations(rest, `${curr}*${first}`),
	];
};

const evaluate = (expr: string): number => {
	const [first, ...arr] = expr.split("");
	let res = Number(first);
	if (isNaN(res)) throw new Error("invalid expression");
	for (let idx = 0; idx < arr.length; idx += 2) {
		const op = arr[idx];
		const curr = Number(arr[idx + 1]);
		if (isNaN(curr)) throw new Error("invalid expression");
		if (op === "+") res += curr;
		else if (op === "-") res -= curr;
		else if (op === "*") res *= curr;
		else if (op === "/") res /= curr;
		else throw new Error("invalid expression");
	}
	return res;
};

export const addOperators = (origin: number, target: number): string[] => {
	const digits = origin.toString().split("");
	const combinations = getCombinations(digits);
	return combinations.filter((expr) => evaluate(expr) === target);
};
