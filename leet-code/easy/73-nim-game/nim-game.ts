// https://leetcode.com/problems/nim-game

type TDivisibleBy4 =
	| `04`
	| `08`
	| `12`
	| `16`
	| `20`
	| `24`
	| `28`
	| `32`
	| `36`
	| `40`
	| `44`
	| `48`
	| `52`
	| `56`
	| `60`
	| `64`
	| `68`
	| `72`
	| `76`
	| `80`
	| `84`
	| `88`
	| `92`
	| `96`
	| `100`;

type TNimGame<N extends number> = `${N}` extends
	| `4`
	| `8`
	| `${string}${TDivisibleBy4}`
	? false
	: true;

export const nimGame = <N extends number>(n: N): TNimGame<N> => {
	return (n % 4 !== 0) as never;
};
