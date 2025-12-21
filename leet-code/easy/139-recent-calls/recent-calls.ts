// https://leetcode.com/problems/number-of-recent-calls

export class RecentCounter {
	private requests: number[];
	constructor() {
		this.requests = [];
	}

	ping(t: number): number {
		this.requests.push(t);
		// return this.requests.filter((r) => r >= t - 3000).length;
		// const lastIdx = this.requests.findLastIndex((r) => r < t - 3000);
		// return this.requests.length - (lastIdx + 1);
		let low = 0;
		let high = this.requests.length - 1;
		while (low <= high) {
			const mid = Math.floor((low + high) / 2);
			if ((this.requests[mid] as number) < t - 3000) {
				low = mid + 1;
			} else {
				high = mid - 1;
			}
		}
		return this.requests.length - low;
	}
}
