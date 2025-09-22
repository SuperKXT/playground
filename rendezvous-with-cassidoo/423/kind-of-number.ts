export const kindOfNumber = (
	num: number,
): "perfect" | "abundant" | "deficient" => {
	if (num < 1 || !Number.isInteger(num))
		throw new Error("Number must be a positive integer");
	let sum = 0;
	for (let i = 1; i < num; i++) {
		if (num % i === 0) sum += i;
	}
	if (sum === num) return "perfect";
	if (sum > num) return "abundant";
	return "deficient";
};
