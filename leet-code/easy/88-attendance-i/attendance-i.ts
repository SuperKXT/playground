// https://leetcode.com/problems/attendance-i

type TAttendance<
	S extends string,
	absents extends Array<1> = [],
	connectives extends Array<1> = [],
> = absents["length"] extends 2
	? false
	: connectives["length"] extends 3
		? false
		: S extends `${infer first}${infer rest}`
			? TAttendance<
					rest,
					first extends "A" ? [...absents, 1] : absents,
					first extends "L" ? [...connectives, 1] : []
				>
			: true;

export const attendance = <S extends string>(s: S): TAttendance<S> => {
	let absents = 0;
	let connectives = 0;
	for (const char of s) {
		if (char === "A") absents++;
		if (char === "L") connectives++;
		else connectives = 0;
		if (absents === 2) return false as never;
		if (connectives === 3) return false as never;
	}
	return true as never;
};
