import { expect, test } from "vitest";

import { MyHashMap } from "./hash-map.js";

test("testing MyHashMap for test 1", () => {
	const myHashSet = new MyHashMap();
	myHashSet.put(1, 1); // set = [[1, 1]]
	myHashSet.put(2, 2); // set = [[1, 1], [2, 2]]
	const get1 = myHashSet.get(1); // return 1
	expect(get1).toBe(1);
	const get2 = myHashSet.get(3); // return -1, (not found)
	expect(get2).toBe(-1);
	myHashSet.put(2, 1); // set = [[1, 1], [2, 1]]
	const get3 = myHashSet.get(2); // return 1
	expect(get3).toBe(1);
	myHashSet.remove(2); // set = [[1, 1]]
	const get4 = myHashSet.get(2); // return False, (already removed)
	expect(get4).toBe(-1); // return -1, (not found)
});
