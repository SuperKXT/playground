# maxSubArraySum

[issue #445 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/change-but-start-slowly-because-direction-is-more/)

Given an array of integers, find the contiguous sub-array that has
the largest sum and return that sum.

A sub-array must contain at least one element.
If all elements are negative, return the largest (least negative) value.
If you need a hint, look up Kadane's Algorithm!

Example:

```ts
> maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])
6
> maxSubArraySum([5])
5
> maxSubArraySum([-1, -2, -3, -4])
-1
> maxSubArraySum([5, 4, -1, 7, 8])
23
```

---

<!-- [Solution Playground](https://tsplay.dev/N7rqEw) -->
