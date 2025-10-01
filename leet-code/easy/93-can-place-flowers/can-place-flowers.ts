// https://leetcode.com/problems/can-place-flowers

export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
	if (n === 0) return true;
	let remaining = n;
	for (let i = 0; i < flowerbed.length; i++) {
		const prev = flowerbed[i - 1] ?? 0;
		const curr = flowerbed[i] as number;
		const next = flowerbed[i + 1] ?? 0;
		if (prev === 0 && curr === 0 && next === 0) {
			remaining--;
			if (remaining === 0) return true;
			i++;
		}
	}
	return false;
};
