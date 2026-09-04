/** the ANSI keyboard rows, in order, as they sit under the user's hands */
const ROWS = ["`1234567890-=", "qwertyuiop[]\\", "asdfghjkl;'", "zxcvbnm,./"]; // cSpell: disable-line

/** maps every key to the one directly to its left on the same row */
const SHIFT_LEFT = new Map(
	ROWS.flatMap((row) =>
		Array.from(row).map((key, idx) => [key, row[idx - 1] ?? key] as const),
	),
);

export const translateShiftRight = (str: string): string =>
	Array.from(str)
		.map((char) => {
			const lower = char.toLowerCase();
			const shifted = SHIFT_LEFT.get(lower) ?? lower;
			return char === lower ? shifted : shifted.toUpperCase();
		})
		.join("");
