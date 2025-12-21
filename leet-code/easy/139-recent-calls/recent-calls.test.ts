import { expect, test } from "vitest";

import { RecentCounter } from "./recent-calls.js";

test("testing RecentCounter for test 1", () => {
	const counter = new RecentCounter();

	const result1 = counter.ping(1);
	const expected1 = 1;
	expect(result1).toStrictEqual(expected1);

	const result2 = counter.ping(100);
	const expected2 = 2;
	expect(result2).toStrictEqual(expected2);

	const result3 = counter.ping(3001);
	const expected3 = 3;
	expect(result3).toStrictEqual(expected3);

	const result4 = counter.ping(3002);
	const expected4 = 3;
	expect(result4).toStrictEqual(expected4);
});

test("testing RecentCounter for test 2", () => {
	const counter = new RecentCounter();

	for (let i = 0; i < 3002; i++) {
		const res = counter.ping(i);
		expect(res).toStrictEqual(i < 3001 ? i + 1 : i);
	}
	const res = counter.ping(6001);
	expect(res).toBe(2);
});
