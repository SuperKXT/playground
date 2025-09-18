import { expect, test } from "vitest";

import { QueueWithStacks } from "./stack-with-queues.js";

test("testing QueueWithStacks for test 1", () => {
	const stack = new QueueWithStacks();
	stack.push(1); // [1]
	stack.push(2); // [1, 2]
	expect(stack.peek()).toBe(1);
	expect(stack.pop()).toBe(1); // [2]
	expect(stack.peek()).toBe(2);
	expect(stack.empty()).toBeFalsy();
	expect(stack.pop()).toBe(2); // []
	expect(stack.empty()).toBeTruthy();
});
