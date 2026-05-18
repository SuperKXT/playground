const isUpperCase = (char: string): boolean => {
	const code = char.charCodeAt(0);
	return code >= 65 && code <= 90;
};

const isAlphabet = (char: string): boolean => {
	const code = char.charCodeAt(0);
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

export const toggleChar = (str: string, alternating?: boolean): string => {
	let res = "";
	let last: "upper" | "lower" = "lower";
	for (const char of str) {
		if (alternating) {
			if (!isAlphabet(char)) {
				res += char;
			} else if (last === "lower") {
				res += char.toUpperCase();
				last = "upper";
			} else {
				res += char.toLowerCase();
				last = "lower";
			}
		} else if (isUpperCase(char)) {
			res += char.toLowerCase();
		} else {
			res += char.toUpperCase();
		}
	}
	return res;
};
