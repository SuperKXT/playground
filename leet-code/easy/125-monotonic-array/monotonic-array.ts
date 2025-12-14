// https://leetcode.com/problems/monotonic-array
export const monotonicArray = (nums: number[]): boolean => {
	let last: null | number = null;
	let direction: null | "asc" | "desc" = null;
	for (const num of nums) {
		if (last === null) {
			last = num;
			continue;
		}
		if (direction === null) {
			if (num !== last) direction = num > last ? "asc" : "desc";
			last = num;
			continue;
		}
		if (direction === "asc" ? num < last : last < num) return false;
		last = num;
	}
	return true;
};
