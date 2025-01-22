const OUTLIERS = ["st", "nd", "rd"] as const;
export type TOrdinalSuffix = (typeof OUTLIERS)[number] | "th";

export type TOrdinalNumber = `${number}${TOrdinalSuffix}`;

export const getOrdinalNumber = (number: number): TOrdinalNumber => {
	const index = ![11, 12, 13].includes(number) ? (number % 10) - 1 : -1;
	return `${number}${OUTLIERS[index] ?? "th"}`;
};
