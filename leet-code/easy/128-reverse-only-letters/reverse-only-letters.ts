// https://leetcode.com/problems/min-cost-climbing-stairs

const isAlphabet = (s: string): boolean => {
	return s.toLowerCase() !== s.toUpperCase();
};

export const reverseOnlyLetters = (s: string): string => {
	let leftIdx = 0;
	let rightIdx = s.length - 1;
	let left = "";
	let right = "";
	while (leftIdx < rightIdx) {
		const leftCurr = s[leftIdx] as string;
		if (isAlphabet(leftCurr)) {
			while (rightIdx >= leftIdx) {
				const rightCurr = s[rightIdx] as string;
				if (leftIdx === rightIdx) {
					left += leftCurr;
					rightIdx--;
					break;
				}
				if (isAlphabet(rightCurr)) {
					left += rightCurr;
					right = leftCurr + right;
					rightIdx--;
					break;
				} else {
					right = rightCurr + right;
					rightIdx--;
				}
			}
		} else {
			left += leftCurr;
		}
		leftIdx++;
	}
	return left + (leftIdx === rightIdx ? (s[leftIdx] as string) : "") + right;
};
