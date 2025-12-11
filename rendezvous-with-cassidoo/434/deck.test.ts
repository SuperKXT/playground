import { expect, test } from "vitest";

import { Deck } from "./deck.js";

test("testing Deck against test 1", () => {
	const deck = new Deck();
	deck.shuffle();
	expect(5).toStrictEqual(deck.draw(5).length);
	expect(25).toStrictEqual(deck.draw(25).length);
	expect(22).toStrictEqual(deck.draw(32).length);
	expect(0).toStrictEqual(deck.draw(32).length);
});
