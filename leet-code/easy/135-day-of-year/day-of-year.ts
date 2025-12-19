// https://leetcode.com/problems/day-of-the-year

const dayMap: Record<string, number> = {
	1: 31,
	2: 28,
	3: 31,
	4: 30,
	5: 31,
	6: 30,
	7: 31,
	8: 31,
	9: 30,
	10: 31,
	11: 30,
	12: 31,
};

const getIsLeapYear = (year: number): boolean => {
	if (year % 4 !== 0) return false;
	if (year % 100 !== 0) return true;
	return year % 400 === 0;
};

const getMonthDays = (month: number, year: number): number => {
	const days = dayMap[month] as number;
	if (month !== 2) return days;
	return days + (getIsLeapYear(year) ? 1 : 0);
};

export const dayOfYear = (date: string): number => {
	const [year, month, day] = date.split("-").map((v) => parseInt(v));
	if (!day || !month || !year) throw new Error("Invalid date");
	let res = day;
	for (let i = 1; i < month; i++) {
		res += getMonthDays(i, year);
	}
	return res;
};
