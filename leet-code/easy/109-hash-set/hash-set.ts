// https://leetcode.com/problems/design-hashset

export class MyHashSet {
	private hashMap: Record<number, true> = {};
	add(key: number): void {
		this.hashMap[key] = true;
	}

	remove(key: number): void {
		// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
		delete this.hashMap[key];
	}

	contains(key: number): boolean {
		return this.hashMap[key] ?? false;
	}
}
