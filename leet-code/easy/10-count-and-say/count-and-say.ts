const getRle = (prev: string): string => {
	let res = "";
	let curr: undefined | { digit: string; count: number } = undefined;
	for (const char of prev) {
		if (!curr || curr.digit !== char) {
			if (curr) res += `${curr.count}${curr.digit}`;
			curr = { digit: char, count: 0 };
		}
		curr.count++;
	}
	if (curr) res += `${curr.count}${curr.digit}`;
	return res;
};

export const countAndSay = (n: number): string => {
	let rle = "1";
	for (let idx = 1; idx < n; idx++) {
		rle = getRle(rle);
	}
	return rle;
};
