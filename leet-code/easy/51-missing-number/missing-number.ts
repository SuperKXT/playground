// https://leetcode.com/problems/missing-number

type TMissingNumber<
	Nums extends number[],
	size extends number = Nums["length"],
	union extends number = Nums[number],
	idx extends 1[] = [],
> = idx["length"] extends size
	? idx["length"]
	: idx["length"] extends union
		? TMissingNumber<never, size, union, [...idx, 1]>
		: idx["length"];

export const missingNumber = <const Nums extends number[]>(
	nums: Nums,
): TMissingNumber<Nums> => {
	let expectedSum = 0;
	let sum = 0;
	for (let idx = 0; idx < nums.length; idx++) {
		expectedSum += idx + 1;
		sum += nums[idx] as number;
	}
	return (expectedSum - sum) as never;
};
