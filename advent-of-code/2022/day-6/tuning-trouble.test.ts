import { readFile } from "node:fs/promises";
import path from "node:path";

import { expect, test } from "vitest";

import { tuningTrouble } from "./tuning-trouble.js";

import { config } from "../../../config.js";

type TSolution = ReturnType<typeof tuningTrouble>;

type TTest = {
	input: string;
	output: TSolution;
};

const TESTS: TTest[] = [
	{
		/** cSpell: disable-next-line */
		input: "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
		output: {
			messageMarker: 19,
			packetMarker: 7,
		},
	},
	{
		/** cSpell: disable-next-line */
		input: "bvwbjplbgvbhsrlpgdmjqwftvncz",
		output: {
			messageMarker: 23,
			packetMarker: 5,
		},
	},
	{
		/** cSpell: disable-next-line */
		input: "nppdvjthqldpwncqszvftbrmjlhg",
		output: {
			messageMarker: 23,
			packetMarker: 6,
		},
	},
	{
		/** cSpell: disable-next-line */
		input: "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
		output: {
			messageMarker: 29,
			packetMarker: 10,
		},
	},
	{
		/** cSpell: disable-next-line */
		input: "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
		output: {
			messageMarker: 26,
			packetMarker: 11,
		},
	},
];

test.each(TESTS)(
	"testing turningTrouble against example input",
	({ input, output }) => {
		expect(tuningTrouble(input)).toStrictEqual(output);
	},
);
test("testing turningTrouble against real input", async () => {
	const input = await readFile(path.join(config.dirname, "input.txt"), "utf-8");
	const response = tuningTrouble(input);
	const solution: TSolution = {
		messageMarker: 3476,
		packetMarker: 1210,
	};
	expect(response).toStrictEqual(solution);
});
