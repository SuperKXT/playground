// https://leetcode.com/problems/detect-capital

const getIsUpper = (char: string | undefined): boolean => {
	if (!char) return false;
	const curr = char;
	const code = curr.charCodeAt(0);
	return code >= 65 && code <= 90;
};

export const detectCapital = (word: string): boolean => {
	if (word.length === 1) return true;
	const isFirstUpper = getIsUpper(word[0]);
	const isSecondUpper = getIsUpper(word[1]);
	if (!isFirstUpper && isSecondUpper) return false;

	const casing = isFirstUpper ? (isSecondUpper ? "upper" : "capital") : "lower";
	for (let i = 2; i < word.length; i++) {
		const isUpper = getIsUpper(word[i]);
		if (casing === "upper" && !isUpper) return false;
		if (casing !== "upper" && isUpper) return false;
	}

	return true;
};
