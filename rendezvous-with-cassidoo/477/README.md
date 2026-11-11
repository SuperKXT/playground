# minutesUntilApocalypse

[issue #477 of rendezvous with cassidoo.](https://cassidoo.co/newsletter/2026-10-04/)

On Halloween night, a town is represented by a grid where `0` is an empty lot,
`1` is a living person, and `2` is an infected zombie. Every minute, infection
spreads to any living person directly above, below, left, or right of an
infected zombie. Return the minimum number of minutes until no living people
remain, or `-1` if some people can never be reached.

Examples:

```ts
> minutesUntilApocalypse([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
]);
> 4

> minutesUntilApocalypse([
  [2, 1, 1],
  [0, 1, 1],
  [1, 0, 1]
]);
> -1
```
