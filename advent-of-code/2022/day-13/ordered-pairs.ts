type TSolution = {
	indicesSum: number;
	part2: number;
};

type TPacket = (TPacket | number)[];

const checkPacketOrder = (
	leftPacket: TPacket,
	rightPacket: TPacket,
): boolean | undefined => {
	for (let index = 0; index < leftPacket.length; index++) {
		const left = leftPacket[index] as TPacket | number;
		const right = rightPacket[index];
		if (right === undefined) return false;

		if (typeof left === "number" && typeof right === "number") {
			if (left < right) return true;

			if (left > right) return false;

			continue;
		} else {
			const listCheck = checkPacketOrder(
				!Array.isArray(left) ? [left] : left,
				!Array.isArray(right) ? [right] : right,
			);
			if (listCheck === undefined) continue;

			return listCheck;
		}
	}
	return leftPacket.length === rightPacket.length ? undefined : true;
};

export const orderedPairs = (input: string): TSolution => {
	const solution: TSolution = {
		indicesSum: 0,
		part2: 0,
	};

	const pairs = input
		.split("\n\n")
		.map(
			(row) =>
				row.split("\n").map((curr) => JSON.parse(curr)) as [TPacket, TPacket],
		);

	for (const pair of pairs) {
		const index = pairs.indexOf(pair);
		if (checkPacketOrder(...pair)) solution.indicesSum += index + 1;
	}

	const dividers: [TPacket, TPacket] = [[2], [6]];
	const sorted = pairs
		.flat()
		.concat(dividers)
		.sort((first, second) => {
			const compare = checkPacketOrder(first, second);
			return compare === false ? 1 : -1;
		});
	solution.part2 =
		(sorted.indexOf(dividers[0]) + 1) * (sorted.indexOf(dividers[1]) + 1);

	return solution;
};
