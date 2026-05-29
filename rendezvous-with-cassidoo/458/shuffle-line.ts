export const shuffleLine = (names: string[], n: number): string[] => {
	const left: string[] = [];
	const right: string[] = [];

	for (let i = 1; i <= names.length; i++) {
		const curr = names[i - 1] as string;
		if (i % n === 0) right.push(curr);
		else left.push(curr);
	}

	return [...left, ...right];
};
