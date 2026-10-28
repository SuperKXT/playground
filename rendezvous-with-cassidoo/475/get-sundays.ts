export const getSundays = (year: number, month: number): string[] => {
	const res: string[] = [];
	const curr = new Date(Date.UTC(year, month - 1, 1));
	const day = curr.getDay();
	if (day > 0) curr.setDate(curr.getDate() + 7 - day);
	while (true) {
		if (curr.getMonth() + 1 !== month) break;
		res.push(curr.toISOString().substring(0, 10));
		curr.setDate(curr.getDate() + 7);
	}
	return res;
};
