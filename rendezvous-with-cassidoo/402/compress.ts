export const compress = (chars: string[]): string[] => {
	if (!chars[0]) return [];
	let last = chars[0];
	let count = 1;
	const res = [];
	for (const char of chars.slice(1)) {
		if (char !== last) {
			res.push(last);
			if (count > 1) res.push(count.toString());
			count = 1;
			last = char;
		} else {
			count++;
		}
	}
	res.push(last);
	if (count > 1) res.push(count.toString());
	return res;
};
