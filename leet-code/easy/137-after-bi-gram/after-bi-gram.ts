// https://leetcode.com/problems/occurrences-after-bigram

// export const afterBiGram = (
// 	text: string,
// 	first: string,
// 	second: string,
// ): string[] => {
// 	const regex = new RegExp(`(?<=${first} ${second} )[^ ]+`, "gu");
// 	return text.match(regex) ?? [];
// };

// export const afterBiGram = (
// 	text: string,
// 	first: string,
// 	second: string,
// ): string[] => {
// 	const target = `${first} ${second} `;
// 	let prev = "";
// 	let curr = "";
// 	const res: string[] = [];
// 	for (const char of text) {
// 		if (prev.startsWith(target)) {
// 			prev += char;
// 			if (char === " ") {
// 				res.push(curr);
// 				prev = prev.replace(target, "");
// 				curr = "";
// 			} else {
// 				curr += char;
// 			}
// 		} else {
// 			prev = target.startsWith(`${prev}${char}`) ? `${prev}${char}` : "";
// 		}
// 	}
// 	if (curr) res.push(curr);
// 	return res;
// };

export const afterBiGram = (
	text: string,
	first: string,
	second: string,
): string[] => {
	const res: string[] = [];
	const words = text.split(" ");
	for (let idx = 2; idx < words.length; idx++) {
		if (words[idx - 2] === first && words[idx - 1] === second)
			res.push(words[idx] as string);
	}
	return res;
};
