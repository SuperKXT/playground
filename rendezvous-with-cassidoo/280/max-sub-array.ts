type TMax = {
	subArray: number[];
	sum: number;
};

export const maxSubArray = (array: number[], length: number): number[] => {
	const difference = array.length - length;
	if (difference < 1) return array;

	const max: TMax = {
		subArray: [],
		sum: 0,
	};
	for (let index = 0; index <= difference; index++) {
		const subArray = array.slice(index, index + length);
		const sum = subArray.reduce((acc, num) => acc + num);
		if (sum > max.sum) {
			max.subArray = subArray;
			max.sum = sum;
		}
	}
	return max.subArray;
};
