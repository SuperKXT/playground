import { expect, test } from "vitest";

import { StackWithQueues } from "./stack-with-queues.js";

test("testing StackWithQueues for test 1", () => {
	const stack = new StackWithQueues();
	stack.push(1);
	stack.push(2);

	expect(stack.top()).toBe(2);
	expect(stack.pop()).toBe(2);
	expect(stack.top()).toBe(1);
	expect(stack.empty()).toBe(false);
	expect(stack.pop()).toBe(1);
	expect(stack.empty()).toBe(true);
});
