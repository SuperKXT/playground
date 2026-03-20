# fireStationCoverage

[issue #448 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1faaa-your-work-feels-different-when-its-made/)

You're given a 2D grid representing a city where each cell is either:

- empty (`0`),
- a fire station (`1`)
- a building (`2`)

Fire stations can serve buildings based on `horizontal` + `vertical` moves only.

Return a 2D grid where each cell shows the minimum distance to the nearest fire station.

Example:

```ts
fireStationCoverage([
  [2, 0, 1],
  [0, 2, 0],
  [1, 0, 2]
]);
> [[2, 1, 0],
   [1, 2, 1],
   [0, 1, 2]]

fireStationCoverage([
  [1, 0, 0, 1],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 0, 1]
]);
> [[0, 1, 1, 0],
   [1, 2, 2, 1],
   [1, 2, 2, 1],
   [0, 1, 1, 0]]
```

---

<!-- [Solution Playground](https://tsplay.dev/WGLbkw) -->
