export const minDistance = (
	monsters: number[],
	safeDistance: number,
): number => {
	let smallest = Infinity;
	for (let idx = 1; idx <= monsters.length; idx++) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		const diff = Math.abs(monsters[idx]! - monsters[idx - 1]!);
		if (diff < safeDistance) smallest = Math.min(smallest, diff);
	}
	return (smallest === Infinity ? -1 : smallest) as never;
};
