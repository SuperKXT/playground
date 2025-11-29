type TTask = [string, number, number];

type TTaskRes = {
	count: number;
	chosen: string[];
};

export const mealPrepTasks = (num: TTask[]): TTaskRes => {
	const res: TTaskRes = {
		count: 0,
		chosen: [],
	};
	const sorted = num.toSorted((a, b) => a[1] - b[1]);
	let last: null | TTask = null;
	for (const row of sorted) {
		if (!last || row[1] >= last[2]) {
			last = row;
			res.count++;
			res.chosen.push(row[0]);
		}
	}
	return res;
};
