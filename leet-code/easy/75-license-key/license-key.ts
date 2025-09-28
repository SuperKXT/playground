// https://leetcode.com/problems/license-key-formatting

export const licenseKey = (s: string, k: number): string => {
	let curr = "";
	let res = "";
	for (let id = s.length - 1; id >= 0; id--) {
		const char = s[id] as string;
		const code = char.charCodeAt(0);
		const isDigit = code >= 48 && code <= 57;
		const isLowercase = code >= 97 && code <= 122;
		const isUppercase = code >= 65 && code <= 90;
		if (!isDigit && !isLowercase && !isUppercase) continue;
		curr = `${char.toUpperCase()}${curr}`;
		if (curr.length === k) {
			res = `${curr}${res === "" ? "" : `-${res}`}`;
			curr = "";
		}
	}
	if (curr) res = `${curr}${res === "" ? "" : `-${res}`}`;
	return res;
};
