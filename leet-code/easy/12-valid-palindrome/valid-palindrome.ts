// export const validPalindrome = (str: string): boolean => {
// 	const stripped = str.replace(/[^a-zA-Z0-9]*/gu, "").toLowerCase();
// 	return stripped === stripped.split("").reverse().join("");
// };

export const validPalindrome = (str: string): boolean => {
	let forward = "";
	let back = "";
	for (const char of str) {
		const code = char.charCodeAt(0);
		const isNumber = code >= 48 && code <= 57;
		const isUpperAlphabet = code >= 65 && code <= 90;
		const isLowerAlphabet = code >= 97 && code <= 122;
		if (isUpperAlphabet) {
			forward += char.toLowerCase();
			back = `${char.toLowerCase()}${back}`;
		} else if (isLowerAlphabet || isNumber) {
			forward += char;
			back = `${char}${back}`;
		}
	}
	return forward === back;
};
