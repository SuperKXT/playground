export type TCoord = [number, number];
export const cornerHit = (
	boxSize: TCoord,
	initialPosition: TCoord,
	screenSize: TCoord,
): boolean => {
	const [width, height] = boxSize;
	const [posX, posY] = initialPosition;
	const [screenCornerX, screenCornerY] = screenSize;
	const [logoCornerX, logoCornerY] = [posX + width, posY + height];
	return screenCornerX - logoCornerX === screenCornerY - logoCornerY;
};
