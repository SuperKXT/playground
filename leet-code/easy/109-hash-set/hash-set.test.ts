import { expect, test } from "vitest";

import { MyHashSet } from "./hash-set.js";

test("testing MyHashSet for test 1", () => {
	const myHashSet = new MyHashSet();
	myHashSet.add(1); // set = [1]
	myHashSet.add(2); // set = [1, 2]
	const contain1 = myHashSet.contains(1); // return True
	expect(contain1).toBeTruthy();
	const contain2 = myHashSet.contains(3); // return False, (not found)
	expect(contain2).toBeFalsy();
	myHashSet.add(2); // set = [1, 2]
	const contain3 = myHashSet.contains(2); // return True
	expect(contain3).toBeTruthy();
	myHashSet.remove(2); // set = [1]
	const contain4 = myHashSet.contains(2); // return False, (already removed)
	expect(contain4).toBeFalsy();
});
