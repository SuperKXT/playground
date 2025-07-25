type TPart = {
	name: string;
	arrivalDays: number;
	assemblyHours: number;
};

export const assemblyTime = (parts: TPart[]): number => {
	let hours = 0;
	const sorted = parts.sort((a, b) => a.arrivalDays - b.arrivalDays);
	for (const part of sorted) {
		const arrivalHours = part.arrivalDays * 24;
		const waitHours = Math.max(arrivalHours - hours, 0);
		hours += waitHours + part.assemblyHours;
	}
	return hours;
};
