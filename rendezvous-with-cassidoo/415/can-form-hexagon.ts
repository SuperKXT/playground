export const canFormHexagon = (parts: number[]): boolean => {
	const map = new Map<number, number>();
	for (const r of parts) {
		map.set(r, (map.get(r) ?? 0) + 1);
	}
	return Array.from(map.values()).every((r) => r === 2);
};
