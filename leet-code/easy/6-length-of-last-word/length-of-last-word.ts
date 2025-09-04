// export const lengthOfLastWord = (str: string): number => {
// 	let length = 0;
// 	for (let i = str.length - 1; i >= 0; i--) {
// 		const char = str[i];
// 		if (char !== " ") length++;
// 		else if (length > 0) return length;
// 	}
// 	return length;
// };

export const lengthOfLastWord = (str: string): number => {
	return str.trim().split(" ").at(-1)?.length ?? 0;
};
