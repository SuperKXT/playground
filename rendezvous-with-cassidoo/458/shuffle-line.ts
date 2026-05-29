export const shuffleLine = (names: string[], n: number): string[] => {
	const left: string[] = [];
	const right: string[] = [];
	let curr = 1;
	for (const name of names) {
		if (curr !== n) {
			left.push(name);
		} else {
			right.push(name);
			curr = 0;
		}
		curr++;
	}

	return [...left, ...right];
};
