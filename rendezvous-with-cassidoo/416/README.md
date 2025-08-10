# minDistance

[issue #416 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/you-pray-for-rain-you-gotta-deal-with-the-mud-too/)

Given an array `arr` representing the positions of monsters along a
straight line, and an integer `d` representing the minimum safe distance
required between any two monsters, write a function to determine
if all monsters are at least `d` units apart.

If not, return the smallest distance found between any two monsters.
If all monsters are safely spaced, return `-1`.

Example:

```ts
minDistance([3, 8, 10, 15], 9);
> 2;

minDistance([5, 9, 14, 18], 4);
> -1;
```

---

<!-- [Solution Playground](https://tsplay.dev/NBOPpm) -->
