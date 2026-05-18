const isUpperCase = (char: string): boolean => {
	const code = char.charCodeAt(0);
	return code >= 65 && code <= 90;
};

const isAlphabet = (char: string): boolean => {
	const code = char.charCodeAt(0);
	return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
};

const alternateChar = (str: string): string => {
	let res = "";
	let last: "upper" | "lower" = "lower";
	for (const char of str) {
		if (!isAlphabet(char)) {
			res += char;
		} else if (last === "lower") {
			res += char.toUpperCase();
			last = "upper";
		} else {
			res += char.toLowerCase();
			last = "lower";
		}
	}
	return res;
};

export const toggleChar = (str: string, alternating?: boolean): string => {
	if (alternating) return alternateChar(str);

	let res = "";
	for (const char of str) {
		if (isUpperCase(char)) {
			res += char.toLowerCase();
		} else {
			res += char.toUpperCase();
		}
	}
	return res;
};
