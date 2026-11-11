export const ghostwriter = (str: string): string => {
	const res: string[] = [];
	for (const char of str) {
		if (char === "#") res.pop();
		else if (char === "~") {
			const last = res.at(-1);
			if (last) res.push(last);
		} else res.push(char);
	}
	return res.join("");
};
