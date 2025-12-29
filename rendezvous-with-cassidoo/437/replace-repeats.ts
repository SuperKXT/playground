export const replaceRepeats = (str: string, n: number): string => {
	let res = "";
	let count = 0;
	const num = n.toString();
	for (const char of str) {
		if (char === num) count++;
		else {
			if (count > 0) {
				res += count.toString();
				count = 0;
			}
			res += char;
		}
	}
	if (count > 0) res += count.toString();
	return res as never;
};
