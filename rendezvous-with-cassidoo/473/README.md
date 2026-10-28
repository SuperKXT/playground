# minMoves

[issue #473 of rendezvous with cassidoo.](https://cassidoo.co/newsletter/2026-09-06/)

You have a backpack lock’s starting position, and the code to unlock it,
represented as two strings of integers.

In one move, you may rotate any single digit one step up or down, with `0` and `9`
considered adjacent. Return the minimum number of moves needed to transform
the starting code into the unlock code.

Examples:

```ts
minMoves("8051", "1199");
> 10;

minMoves("000", "555");
> 15;

minMoves("109", "990");
> 4;
```
