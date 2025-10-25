export const splitByWidths = (input: string, widths: number[]): string[] => {
	const res: string[] = [];
	let idx = 0;
	let curr = "";
	for (const char of input) {
		curr += char;
		if (curr.length === widths[idx]) {
			res.push(curr);
			curr = "";
			idx = Math.min(idx + 1, widths.length - 1);
		}
	}
	return res;
};
