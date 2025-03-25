export const findLongestStreak = (
	array: boolean[],
	minimumLength: number,
): number => {
	let currentStreak = 0;
	let longestStreak = 0;
	for (const val of array) {
		if (!val) {
			longestStreak = Math.max(currentStreak, longestStreak);
			currentStreak = 0;
		} else {
			currentStreak++;
		}
	}
	longestStreak = Math.max(currentStreak, longestStreak);
	return longestStreak >= minimumLength ? longestStreak : 0;
};
