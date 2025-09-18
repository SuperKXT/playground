// https://leetcode.com/problems/implement-stack-using-queues

export class QueueWithStacks {
	private stack: number[] = [];

	constructor() {
		this.stack = [];
	}

	push(x: number): void {
		this.stack.push(x);
	}

	pop(): number | undefined {
		return this.get(true);
	}

	peek(): number | undefined {
		return this.get(false);
	}

	private get(remove?: boolean): number | undefined {
		const temp: number[] = [];
		while (this.stack.length) {
			temp.push(this.stack.pop() as number);
		}
		const curr = remove ? temp.pop() : temp.at(-1);
		while (temp.length) {
			this.stack.push(temp.pop() as number);
		}
		return curr;
	}

	empty(): boolean {
		return this.stack.length === 0;
	}
}
