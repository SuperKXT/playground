// cSpell: disable

# minSwapsToAlternate

[issue #447 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f312-dont-let-anyone-rob-you-of-your/)

Given a string s consisting only of 'a' and 'b', you may swap
adjacent characters any number of times.
Return the minimum number of adjacent swaps needed to
transform `s` into an alternating string, either
"ababab..." or "bababa...", or return -1 if it's impossible.

Example:

```ts
minSwapsToAlternate("aabb");
1;

minSwapsToAlternate("aaab");
-1;

minSwapsToAlternate("aaaabbbb");
6;
```

---

<!-- [Solution Playground](https://tsplay.dev/WGLbkw) -->
