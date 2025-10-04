// https://leetcode.com/problems/construct-the-rectangle/

export const constructRectangle = (area: number): [number, number] => {
	for (let i = Math.ceil(Math.sqrt(area)); i < area; i++) {
		const div = area / i;
		if (Number.isInteger(div)) return [i, div];
	}
	return [area, 1];
};
