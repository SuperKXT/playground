// https://leetcode.com/problems/guess-number-higher-or-lower

export const guessNumber = (n: number, guess: (n: number) => number) => {
	let start = 1;
	let end = n;
	while (start <= end) {
		const mid = Math.floor((start + end) / 2);
		const guessed = guess(mid);
		if (guessed === 0) return mid;
		if (guessed > 0) start = mid + 1;
		else end = mid - 1;
	}
	throw new Error("Number not found!");
};
