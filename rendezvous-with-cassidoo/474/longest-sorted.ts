export const longestSorted = (str: string): string => {
	let max = "";
	let curr = "";
	let lastCode = -Infinity;
	let skip = false;
	for (const char of str) {
		if (char === " ") {
			if (!skip && curr.length > 1 && curr.length > max.length) max = curr;
			curr = "";
			lastCode = -Infinity;
			skip = false;
		} else if (!skip) {
			const code = char.toLowerCase().charCodeAt(0);
			if (code < lastCode) {
				skip = true;
			} else {
				curr += char;
			}
			lastCode = code;
		}
	}
	return max;
};
