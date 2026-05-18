type TParams = {
	grid: [number, number];
	start: [number, number];
	target: [number, number];
	speed: [number, number];
};

export const countBouncesToTarget = ({
	grid,
	start,
	target,
	speed,
}: TParams): number => {
	let bounces = 0;
	let speedX = speed[0];
	let speedY = speed[1];
	let currX = start[0];
	let currY = start[1];
	const set = new Set<string>();
	while (true) {
		const key = `location:[${currX},${currY}], speed:[${speedX},${speedY}]`;
		if (set.size > 500 || set.has(key)) return -1;

		if (currX === target[0] && currY === target[1]) return bounces;

		const nextX = currX + speedX;
		const nextY = currY + speedY;

		const bounceX = nextX < 0 || nextX >= grid[0];
		const bounceY = nextY < 0 || nextY >= grid[1];
		if (bounceX) {
			speedX *= -1;
			currX += speedX;
		} else {
			currX = nextX;
		}
		if (bounceY) {
			speedY *= -1;
			currY += speedY;
		} else {
			currY = nextY;
		}

		if (bounceX || bounceY) bounces++;
		set.add(key);
	}
};
