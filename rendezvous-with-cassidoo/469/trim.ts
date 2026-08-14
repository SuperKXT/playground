type TTrimType = "leading" | "trailing" | "both" | "compress";

export const trim = (type: TTrimType, s: string): string => {
	if (type === "compress") {
		let res = "";
		let last = "";
		for (const char of s) {
			if (last === " " && char === " ") continue;
			last = char;
			res += char;
		}
		return res;
	}

	let startIdx = 0;
	let endIdx = s.length - 1;
	if (type !== "trailing") {
		for (startIdx; startIdx < s.length; startIdx++) {
			if (s[startIdx] !== " ") break;
		}
	}
	if (type !== "leading") {
		for (endIdx; endIdx >= 0; endIdx--) {
			if (s[endIdx] !== " ") break;
		}
	}
	return s.slice(startIdx, endIdx + 1);
};
