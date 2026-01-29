const vowels = ["a", "e", "i", "o", "u"] as const;
type TVowel = (typeof vowels)[number];
const vowelSet = new Set(vowels);

const getWord = (str: string, shouldReverse: boolean): string => {
	if (!shouldReverse) return str;
	let res = "";
	for (const char of str) {
		res = char + res;
	}
	return res;
};

export const flipWords = <Str extends string>(str: Str): string => {
	let curr = "";
	let currCount = 0;
	let count: null | number = null;
	let res = "";
	for (const char of str) {
		if (char === " ") {
			const toAdd = getWord(curr, currCount === count);
			if (count === null) count = currCount;
			curr = "";
			currCount = 0;
			res += `${res === "" ? "" : " "}${toAdd}`;
		} else {
			curr += char;
			if (vowelSet.has(char)) currCount++;
		}
	}
	if (curr !== "") {
		const toAdd = getWord(curr, currCount === count);
		res += `${res === "" ? "" : " "}${toAdd}`;
	}
	return res;
};
