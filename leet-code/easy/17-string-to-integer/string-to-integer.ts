const min = -(2 ** 31);
const max = 2 ** 31 - 1;

export const stringToInteger = (str: string): number => {
	let numStr = "";
	let sign: string | undefined = undefined;
	for (const char of str.trimStart()) {
		if (char === " ") break;
		if (sign === undefined) {
			sign = char === "-" ? "-" : "+";
			if (char === "-" || char === "+") continue;
		}
		if (char === "0" && !numStr) continue;
		const digit = Number(char);
		if (isNaN(digit)) break;
		numStr += char;
	}
	const num = Number(`${sign ?? "+"}${numStr}`) || 0;
	return Math.min(Math.max(num, min), max);
};
