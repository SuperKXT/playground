# Return sub array with biggest sum

[issue #280 of rendezvous with cassidoo.](https://buttondown.email/cassidoo/archive/from-a-small-seed-a-mighty-trunk-may-grow/)

## Description

Given an array of integers arr and an integer n, return a sub array of arr of
length n where the sum is the largest. Make sure you maintain the order of the
original array.
If n is greater than arr.length, you can choose what you want to return.

Example:

```ts
> maxSubArray([-4,2,-5,1,2,3,6,-5,1], 4)
> [1,2,3,6]

> maxSubArray([1,2,0,5], 2)
> [0,5]
```
