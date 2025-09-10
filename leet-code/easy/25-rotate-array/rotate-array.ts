export const rotateArray = (nums: number[], k: number): void => {
	for (let idx = 0; idx < k; idx++) {
		nums.splice(0, 0, nums.pop() as number);
	}
};
