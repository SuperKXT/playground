// https://leetcode.com/problems/long-pressed-name

export const longPressedName = (name: string, typed: string): boolean => {
	if (typed.length < name.length) return false;
	let nameIdx = 0;
	let last: string = "";
	for (const char of typed) {
		const nameChar = name[nameIdx] as string;
		if (nameChar === char) nameIdx++;
		else if (char !== last) return false;
		last = char;
	}
	return nameIdx === name.length;
};
