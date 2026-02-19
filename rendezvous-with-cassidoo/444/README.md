# zoom

[issue #444 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/imaginary-obstacles-are-insurmountable-real-ones/)

You have a 2D grid of numbers. Write a function that zooms in by an
integer factor `k >= 2` by turning each cell into a `k x k`
block with the same value, returning the bigger grid.

Example:

```ts
zoom([[1,2],[3,4]], 2);
> [
  [1,1,2,2],
  [1,1,2,2],
  [3,3,4,4],
  [3,3,4,4]
]

zoom([[7,8,9]], 3);
> [
  [7,7,7,8,8,8,9,9,9],
  [7,7,7,8,8,8,9,9,9],
  [7,7,7,8,8,8,9,9,9]
]

zoom([[1],[2]], 3);
> [
  [1,1,1],
  [1,1,1],
  [1,1,1],
  [2,2,2],
  [2,2,2],
  [2,2,2]
]
```

---

<!-- [Solution Playground](https://tsplay.dev/WyKq2N) -->
