// https://leetcode.com/problems/first-bad-version

export const firstBadVersion = (isBadVersion: (n: number) => boolean) => {
	return (n: number): number => {
		let start = 0;
		let end = n - 1;
		while (start <= end) {
			const mid = Math.floor((start + end) / 2);
			if (isBadVersion(mid)) end = mid - 1;
			else start = mid + 1;
		}
		return start;
	};
};
