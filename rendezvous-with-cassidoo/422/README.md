# analyzeBaseballGame

[issue #422 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/there-is-nothing-more-truly-artistic-than-to-love/)

You are given an array of arrays, where each inner array represents
the runs scored by each team in an inning of a baseball game:
`[[home1, away1], [home2, away2], ...]`.

Write a function that returns an object with the total runs for
each team, which innings each team led, and who won the game.

Example:

```ts
const innings = [[1, 0], [2, 2], [0, 3], [4, 1]];


> analyzeBaseballGame(innings);
> {
    homeTotal: 7,
    awayTotal: 6,
    homeLedInnings: [1, 2, 4],
    awayLedInnings: [3],
    winner: "home"
  }
```

---

<!-- [Solution Playground](https://tsplay.dev/NlrlOW) -->
