// https://leetcode.com/problems/pascals-triangle

export const pascalTriangle = (rows: number): number[][] => {
	if (rows < 1 || !Number.isInteger(rows))
		throw new Error("Invalid rows, must be a positive integer");
	const res: number[][] = [];
	for (let i = 0; i < rows; i++) {
		const last = res[i - 1];
		if (!last) {
			res.push([1]);
			continue;
		}
		const curr: number[] = [];
		res.push(curr);
		for (let j = 0; j < i + 1; j++) {
			curr.push((last[j] ?? 0) + (last[j - 1] ?? 0));
		}
	}
	return res;
};
