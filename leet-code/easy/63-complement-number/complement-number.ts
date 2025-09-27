// https://leetcode.com/problems/complement-number

// export const complementNumber = (num: number): number => {
// 	const str = num.toString(2);
// 	let complement = "";
// 	for (const char of str) {
// 		complement += char === "1" ? "0" : "1";
// 	}
// 	return parseInt(complement, 2);
// };

export const complementNumber = (num: number): number => {
	let complement = 0;
	let curr = num;
	let digit = 0;
	while (true) {
		const inverted = curr % 2 === 1 ? 0 : 1;
		complement += inverted * 2 ** digit;
		if (curr < 2) break;
		curr = Math.floor(curr / 2);
		digit++;
	}
	return complement;
};
