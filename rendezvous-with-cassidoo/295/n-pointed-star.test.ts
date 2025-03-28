import { expect, test } from "vitest";

import { getStarAngles } from "./n-pointed-star.js";

type TTest = {
	input: number;
	output: number;
};

const tests: TTest[] = [
	{ input: 3, output: 180 },
	{ input: 4, output: 360 },
	{ input: 5, output: 180 },
	{ input: 6, output: 360 },
	{ input: 7, output: 180 },
	{ input: 8, output: 360 },
	{ input: 9, output: 180 },
];

test.each(tests)(
	"should return the angles of the star with n sides",
	({ input, output }) => {
		const response = getStarAngles(input);
		expect(response).toBe(output);
	},
);
test("should fail for less then 3 sides", () => {
	expect(() => {
		getStarAngles(2);
	}).toThrow("stars must have at least 3 sides!");
});
