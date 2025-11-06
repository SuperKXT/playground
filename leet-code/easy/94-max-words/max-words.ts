// https://leetcode.com/problems/maximum-number-of-words-found-in-sentences

type TWordCount<
	Sentence extends string,
	Max extends Array<1>,
	Curr extends Array<1> = [1],
> = Sentence extends `${infer first}${infer rest}`
	? first extends " "
		? TWordCount<
				rest,
				Max["length"] extends Curr["length"] ? [...Max, 1] : Max,
				[...Curr, 1]
			>
		: TWordCount<rest, Max, Curr>
	: Curr;

type TMaxWords<
	Sentences extends string[],
	Max extends Array<1> = [1],
> = Sentences extends [
	infer first extends string,
	...infer rest extends string[],
]
	? TMaxWords<rest, TWordCount<first, Max>>
	: Max["length"];

// export const maxWords = <const Sentences extends string[]>(
// 	sentences: Sentences,
// ): TMaxWords<Sentences> => {
// 	return Math.max(
// 		...sentences.map((sentence) => sentence.split(" ").length),
// 	) as never;
// };

export const maxWords = <const Sentences extends string[]>(
	sentences: Sentences,
): TMaxWords<Sentences> => {
	let max = 0;
	for (const sentence of sentences) {
		let curr = 1;
		for (const char of sentence) {
			if (char === " ") curr++;
		}
		if (curr > max) max = curr;
	}
	return max as never;
};
