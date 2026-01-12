// https://leetcode.com/problems/flood-fill

const _floodFill = (
	image: number[][],
	sr: number,
	sc: number,
	originalColor: number,
	replaceColor: number,
	set: Set<string>,
	// eslint-disable-next-line max-params
): void => {
	const key = `${sr}-${sc}`;
	const row = image[sr];
	if (set.has(key) || row?.[sc] !== originalColor) return;
	set.add(key);
	row[sc] = replaceColor;
	_floodFill(image, sr + 1, sc, originalColor, replaceColor, set);
	_floodFill(image, sr - 1, sc, originalColor, replaceColor, set);
	_floodFill(image, sr, sc + 1, originalColor, replaceColor, set);
	_floodFill(image, sr, sc - 1, originalColor, replaceColor, set);
};

export const floodFill = (
	image: number[][],
	sr: number,
	sc: number,
	color: number,
): number[][] => {
	const originalColor = image[sr]?.[sc];
	if (originalColor === undefined) return image;
	_floodFill(image, sr, sc, originalColor, color, new Set());
	return image;
};
