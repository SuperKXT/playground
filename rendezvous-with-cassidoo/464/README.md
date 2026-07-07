# fireworkBlast

[issue #463 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f36b-great-success-doesnt-come-in-short-periods/)

Given an `n` x `m` grid, an odd integer `size`, and a coordinate (`row`, `col`)
representing where a firework explodes, return all grid coordinates impacted by the blast.

A firework affects every cell within `Math.floor(size / 2)` rows and columns of
the center, clipped to the grid boundaries.

Examples:

```ts
> fireworkBlast(5, 5, 3, 1, 1);
> [[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]]

> fireworkBlast(3, 3, 1, 2, 1);
> [[2,1]]

> fireworkBlast(5, 5, 3, 4, 4);
> [[3,3],[3,4],[4,3],[4,4]]
```
