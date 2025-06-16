const numerals: Record<string, number> = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
};

const subtractiveNumerals: Record<string, number> = {
	IV: 4,
	IX: 9,
	XL: 40,
	XC: 90,
	CD: 400,
	CM: 900,
};

export const decodeRomanNumerals = (val: string): number => {
	let res: number = 0;

	let currStr = val;
	while (currStr !== "") {
		const firstTwo = currStr.slice(0, 2);
		const first = currStr.slice(0, 1);
		if (subtractiveNumerals[firstTwo]) {
			currStr = currStr.slice(2);
			res += subtractiveNumerals[firstTwo];
		} else if (numerals[first]) {
			currStr = currStr.slice(1);
			res += numerals[first];
		} else throw new Error(`Invalid input`);
	}

	return res;
};
