// https://leetcode.com/problems/implement-stack-using-queues
export class StackWithQueues {
	private queue: number[] = [];

	constructor() {
		this.queue = [];
	}

	push(x: number): void {
		const size = this.queue.length;
		this.queue.unshift(x);
		for (let i = size; i > 0; i--) {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			this.queue.unshift(this.queue.pop()!);
		}
	}

	pop(): number | undefined {
		return this.queue.pop();
	}

	top(): number | undefined {
		return this.queue.at(-1);
	}

	empty(): boolean {
		return this.queue.length === 0;
	}
}
