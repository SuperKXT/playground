export const reverseArray = (arr: unknown[]): void => {
	for (let idx = 0; idx < arr.length / 2; idx++) {
		const temp = arr[idx];
		arr[idx] = arr[arr.length - idx - 1];
		arr[arr.length - idx - 1] = temp;
	}
};
