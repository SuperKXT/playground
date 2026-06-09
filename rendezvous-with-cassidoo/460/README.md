# maxSolitaireMoves

[issue #460 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f34e-what-we-know-is-a-drop-what-we-dont-know/)

You have a "mini" version of solitaire in front of you.

There is a row of cards, where each card has a rank from `1` to `13` and a color of `red` or `black`.
In one move, you may place a card onto another card immediately to its left if its rank is exactly one less
and its color is opposite, then remove the moved card from its original position.

Return the maximum number of valid moves you can make by repeatedly scanning `left` to `right`.

Examples:

```ts
const cards = [
  { rank: 7, color: "black" },
  { rank: 6, color: "red" },
  { rank: 5, color: "black" },
  { rank: 9, color: "red" }
];

const cards2 = [
  { rank: 8, color: "black" },
  { rank: 7, color: "red" },
  { rank: 6, color: "red" },
  { rank: 5, color: "black" }
];

> maxSolitaireMoves(cards);
> 2 // 6 onto 7, 5 onto 6

> maxSolitaireMoves(cards2);
> 2 // 7 onto 8, 5 onto 6
```
