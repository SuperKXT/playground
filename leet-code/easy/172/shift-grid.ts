// https://leetcode.com/problems/day-of-the-week

const dayMap = {
	0: "Sunday",
	1: "Monday",
	2: "Tuesday",
	3: "Wednesday",
	4: "Thursday",
	5: "Friday",
	6: "Saturday",
} as const;

export const dayOfTheWeek = (
	day: number,
	month: number,
	year: number,
): string => {
	const date = new Date(`${year}-${month}-${day}`);
	return dayMap[date.getDay() as keyof typeof dayMap];
};
