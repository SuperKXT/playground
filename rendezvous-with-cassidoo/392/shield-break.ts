export const shieldBreak = (damages: number[], capacity: number): number => {
	let remaining = capacity;
	for (let idx = 0; idx < damages.length; idx++) {
		const damage = damages[idx] as number;
		remaining -= damage;
		if (remaining < 0) return idx;
	}
	return -1;
};
