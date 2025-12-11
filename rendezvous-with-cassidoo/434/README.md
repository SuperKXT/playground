# deck

[issue #434 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/dont-watch-the-clock-do-what-it-does-keep-going)

Make a data structure for a deck of cards, and implement a `shuffle()` method,
and a `draw(n)` method (where you draw n cards).

Calling `draw()` when the deck is empty returns an empty array.

Example:

```ts
const deck = new Deck();
deck.shuffle();
console.log(deck.draw(5)); // Example: ['10♠', 'K♥', '3♣', 'J♦', '7♠']
console.log(deck.draw(5).length); // 5
console.log(deck.draw(2)); // Example: ['5♣', 'A♠']
```

---

<!-- [Solution Playground](https://tsplay.dev/wQavnw) -->
