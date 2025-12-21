// https://leetcode.com/problems/number-of-recent-calls

export class RecentCounter {
	private requests: number[];
	constructor() {
		this.requests = [];
	}

	ping(t: number): number {
		this.requests.push(t);
		return this.requests.filter((r) => r >= t - 3000).length;
	}
}
