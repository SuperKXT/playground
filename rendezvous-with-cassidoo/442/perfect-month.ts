const getIsLeapYear = (year: number): boolean => {
	if (year % 4 !== 0) return false;
	if (year % 100 !== 0) return true;
	return year % 400 === 0;
};

const isPerfectMonth = (year: number): boolean => {
	const curr = new Date(year, 1, 1);
	if (curr.getDay() !== 0 && curr.getDay() !== 1) return false;
	return !getIsLeapYear(year);
};

export const perfectMonth = (year: number): { prev: string; next: string } => {
	let prev: string = "";
	let next: string = "";

	let curr = year;
	while (curr > 0) {
		if (isPerfectMonth(curr)) {
			prev = `${curr}-02`;
			break;
		}
		curr--;
	}

	curr = year + 1;
	while (true) {
		if (isPerfectMonth(curr)) {
			next = `${curr}-02`;
			break;
		}
		curr++;
	}

	return { prev, next };
};
