# konamiMapping

[issue #440 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/you-can-destroy-your-now-by-worrying-about/)

Given a string str, find a contiguous substring of length 10
whose characters can be bijectively mapped to the moves {U,D,L,R,B,A}
so that the substring decodes to the Konami code "UUDDLRLRBA"
(a character always maps to the same move, and two different moves can’t share a character).
Return a valid mapping as an object.

Example:

```ts
konamiMapping("xx2233454590yy11110");
> { "0": "A", "2": "U", "3": "D", "4": "L", "5": "R", "9": "B" }

konamiMapping("sduwahoda22ii0d0dbn"); // cSpell: disable-line
> { "0": "L", "2": "U", "i": "D", "d": "R", "b": "B", "n": "A" }

```

---

<!-- [Solution Playground](https://tsplay.dev/wXMaQN) -->
