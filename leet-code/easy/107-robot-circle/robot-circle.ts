// https://leetcode.com/problems/robot-return-to-origin

export const robotCircle = (moves: string): boolean => {
	const pos: [number, number] = [0, 0];
	for (const char of moves) {
		if (char === "U") pos[1]++;
		else if (char === "D") pos[1]--;
		else if (char === "L") pos[0]--;
		else pos[0]++;
	}
	return pos[0] === 0 && pos[1] === 0;
};
