const UNITS: Record<string, number> = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
	ten: 10,
	eleven: 11,
	twelve: 12,
	thirteen: 13,
	fourteen: 14,
	fifteen: 15,
	sixteen: 16,
	seventeen: 17,
	eighteen: 18,
	nineteen: 19,
	twenty: 20,
	thirty: 30,
	forty: 40,
	fifty: 50,
	sixty: 60,
	seventy: 70,
	eighty: 80,
	ninety: 90,
};

/** multipliers that close off the chunk built up so far */
const SCALES: Record<string, number> = {
	thousand: 1000,
	million: 1000000,
};

export const parseNumber = (string: string): number => {
	let total = 0;
	let chunk = 0;

	for (const word of string.toLowerCase().split(/[\s-]+/u)) {
		if (!word || word === "and") continue;

		const unit = UNITS[word];
		if (unit !== undefined) {
			chunk += unit;
			continue;
		}

		if (word === "hundred") {
			chunk *= 100;
			continue;
		}

		const scale = SCALES[word];
		if (scale !== undefined) {
			total += chunk * scale;
			chunk = 0;
			continue;
		}

		throw new Error(`unrecognized number word: "${word}"`);
	}

	return total + chunk;
};
