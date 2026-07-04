export const shouldAutoReply = (
	unavailable: Array<[string, string]>,
	overrides: string[],
	date: string,
): boolean => {
	return (
		!overrides.includes(date) &&
		unavailable.some(([start, end]) => start <= date && date <= end)
	);
};
