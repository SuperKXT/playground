// https://leetcode.com/problems/design-hashset

export class MyHashMap {
	private map: Record<string, number> = {};

	put(key: number, value: number): void {
		this.map[key] = value;
	}

	get(key: number): number {
		return this.map[key] ?? -1;
	}

	remove(key: number): void {
		// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
		delete this.map[key];
	}
}
