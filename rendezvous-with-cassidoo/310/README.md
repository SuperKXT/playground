# Find missing letters in an alphabet array

[issue #310 of rendezvous with cassidoo.](https://buttondown.email/cassidoo/archive/the-thermometer-of-success-is-merely-the-jealousy/)

**Given an array where each element is the price of a given stock on that index's day,
choose a single day to buy a stock and a different day (in the future/later in the array)
to sell the stock to maximize your profit.**
Return the maximum profit that you can get from a given input. If you can't profit, return 0.

Example:

```ts
> maximumProfit([7,1,5,3,6,4])
> 5 // Buy on day 2, and sell on day 5, your profit = 6-1 = 5.
```
