export const countBlinks = (str: string): number => {
	let firstFound = false;
	let max = 0;
	let curr = 0;
	for (const char of str) {
		if (char === "_") {
			firstFound = true;
			max = Math.max(max, curr);
			curr = 0;
		} else if (firstFound) curr++;
	}
	return max;
};
