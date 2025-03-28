import { expect, test } from "vitest";

import { divisibleIntegers } from "./divisible-integers.js";

import type { Utils } from "../../types/utils.types.js";
import type { TDivisibleIntegerN } from "./divisible-integers.js";

type TTest = {
	input: number[];
	outputs: Utils.tuple<9, boolean>;
};

const TESTS: TTest[] = [
	{
		input: [40, 50, 90],
		outputs: [true, true, true, true, true, true, false, true, true],
	},
];
test.each(TESTS)(
	"should return the if the number is divisible to given array digits",
	({ input, outputs }) => {
		for (let idx = 0; idx < outputs.length; idx++) {
			const response = divisibleIntegers(
				(idx + 1) as TDivisibleIntegerN,
				input,
			);
			expect(response).toBe(outputs[idx]);
		}
	},
);
