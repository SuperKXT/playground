# reorder

[issue #468 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f351-you-cant-suppress-the-things-that-make-us/)

Given an array of strings `A`, and an array of indexes `B`,
reorder the strings in array `A` with the given indices in array `B`.

You can choose to do this in-place, or return a new array.

As you decide which route to take, think... which is more efficient?

Examples:

```ts
let a = ['C', 'D', 'E', 'F', 'G', 'H'];
let b = [3, 0, 4, 1, 2, 5];

> reorder(a, b) // a is now ['D', 'F', 'G', 'C', 'E', 'H']
```
