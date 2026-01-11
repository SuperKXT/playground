// https://leetcode.com/problems/valid-mountain-array

export const validMountainArray = (arr: number[]): boolean => {
	let status: "up" | "down" = "up";
	if (arr[0] === undefined || arr[1] === undefined || arr[1] < arr[0])
		return false;
	for (let i = 1; i < arr.length; i++) {
		const num = arr[i] as number;
		const last = arr[i - 1] as number;
		if (num > last) {
			if (status !== "up") return false;
		} else if (num < last) {
			if (status === "up") status = "down";
		} else return false;
	}
	return status === "down";
};
