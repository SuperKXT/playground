# maxPatternCopies

[issue #453 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f9f0-after-all-is-said-and-done-more-is-said/)

Given a string s containing letters and `?` wildcards (that can match any letter),
and a target pattern string pattern, rearrange the entire string however you like.

Return the maximum number of non-overlapping copies of pattern that can
appear in the rearranged result.

Example:

```ts
maxPatternCopies("abcabc???", "ac"); // 3

maxPatternCopies("aab??", "aab"); // 1

maxPatternCopies("??????", "abc"); // 2
```
