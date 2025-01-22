type TPoint = {
	row: number;
	col: number;
};
type TSensor = {
	beacon: TPoint;
	distance: number;
} & TPoint;

const getDistance = (from: TPoint, to: TPoint): number =>
	Math.abs(to.row - from.row) + Math.abs(to.col - from.col);

const equal = (first: TPoint, second: TPoint) =>
	first.row === second.row && first.col === second.col;

export const beaconGopher1 = (input: string, row: number): number => {
	let solution = 0;

	const sensors: TSensor[] = [];
	let startRow = 0;
	let endRow = 0;
	let startCol = 0;
	let endCol = 0;

	for (const line of input.split("\n")) {
		const [sensorCol, sensorRow, beaconCol, beaconRow] = line
			.replace(/(Sensor at x=)|( y=)|( closest beacon is at x=)/gu, "")
			.split(/,|:/gu)
			.map(Number) as [number, number, number, number];

		const beacon: TPoint = {
			col: beaconCol,
			row: beaconRow,
		};

		const distance = getDistance({ col: sensorCol, row: sensorRow }, beacon);

		const sensor: TSensor = {
			beacon,
			col: sensorCol,
			distance,
			row: sensorRow,
		};

		const currStartRow = sensorRow - distance;
		const currEndRow = Math.max(sensorRow, beaconRow, sensorRow + distance);
		const currStartCol = sensorCol - distance;
		const currEndCol = Math.max(sensorCol, beaconCol, sensorCol + distance);

		if (startRow > currStartRow) startRow = currStartRow;

		if (endRow < currEndRow) endRow = currEndRow;

		if (startCol > currStartCol) startCol = currStartCol;

		if (endCol < currEndCol) endCol = currEndCol;

		sensors.push(sensor);
	}

	for (let col = startCol; col <= endCol; col++) {
		const point = { col, row };
		let isCovered = false;
		for (const sensor of sensors) {
			const isSensorOrBeacon =
				equal(point, sensor) || equal(point, sensor.beacon);
			if (isSensorOrBeacon) break;

			if (sensor.distance >= getDistance(point, sensor)) {
				isCovered = true;
				break;
			}
		}
		if (isCovered) solution++;
	}

	return solution;
};

export const beaconGopher2 = (input: string, max: number): number => {
	const sensors: TSensor[] = [];
	let startRow = 0;
	let endRow = 0;
	let startCol = 0;
	let endCol = 0;

	for (const line of input.split("\n")) {
		const [sensorCol, sensorRow, beaconCol, beaconRow] = line
			.replace(/(Sensor at x=)|( y=)|( closest beacon is at x=)/gu, "")
			.split(/,|:/gu)
			.map(Number) as [number, number, number, number];

		const beacon: TPoint = {
			col: beaconCol,
			row: beaconRow,
		};

		const distance = getDistance({ col: sensorCol, row: sensorRow }, beacon);

		const sensor: TSensor = {
			beacon,
			col: sensorCol,
			distance,
			row: sensorRow,
		};

		const currStartRow = sensorRow - distance;
		const currEndRow = Math.max(sensorRow, beaconRow, sensorRow + distance);
		const currStartCol = sensorCol - distance;
		const currEndCol = Math.max(sensorCol, beaconCol, sensorCol + distance);

		if (startRow > currStartRow) startRow = currStartRow;

		if (endRow < currEndRow) endRow = currEndRow;

		if (startCol > currStartCol) startCol = currStartCol;

		if (endCol < currEndCol) endCol = currEndCol;

		sensors.push(sensor);
	}

	for (let row = 0; row <= max; row++) {
		for (let col = 0; col <= max; col++) {
			const point = { col, row };
			let isCovered = false;
			for (const sensor of sensors) {
				const isSensorOrBeacon =
					equal(point, sensor) || equal(point, sensor.beacon);
				if (isSensorOrBeacon) {
					isCovered = true;
					break;
				}
				if (sensor.distance >= getDistance(point, sensor)) {
					isCovered = true;
					break;
				}
			}
			if (!isCovered) return col * 4000000 + row;
		}
	}

	return 0;
};
