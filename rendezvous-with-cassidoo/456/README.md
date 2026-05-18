# countBouncesToTarget

[issue #456 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f929-competition-drives-innovation-but/)

You are given a 2D grid representing a screen, a starting position for a bouncing object,
a target position, and an initial diagonal direction.

On each step, the object moves one cell diagonally, and if its next move would leave the grid,
it "bounces" by reversing the corresponding row and/or column direction before continuing.

Return the number of bounces needed for the logo to land on the target cell,
or `-1` if it will loop forever without ever reaching it.

Examples:

```ts
countBouncesToTarget({
	grid: [8, 8],
	start: [0, 0],
	target: [3, 4],
	speed: [1, 4],
});
> 2

countBouncesToTarget({
	grid: [3, 3],
	start: [0, 1],
	target: [2, 1],
	speed: [1, 1],
});
> 1

countBouncesToTarget({
	grid: [4, 5],
	start: [0, 0],
	target: [3, 3],
	speed: [1, 1],
});
> 0

countBouncesToTarget({
	grid: [4, 5],
	start: [2, 0],
	target: [0, 2],
	speed: [-1, 1],
});
> 0

countBouncesToTarget({
	grid: [4, 5],
	start: [2, 0],
	target: [2, 2],
	speed: [-1, 1],
});
> 1

countBouncesToTarget({
	grid: [4, 5],
	start: [3, 0],
	target: [1, 1],
	speed: [-1, 1],
});
> -1

countBouncesToTarget({
	grid: [4, 5],
	start: [2, 0],
	target: [3, 1],
	speed: [-1, 1],
});
> 3
```
