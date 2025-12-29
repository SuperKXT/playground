# replaceRepeats

[issue #437 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/the-beginning-is-the-word-and-the-end-is-silence/)

Given a string that contains only digits from 0 to 9 and a number `n`,
replace each consecutive run of n with its length.

Example:

```ts
> replaceRepeats("1234500362000440", 0);
> "1234523623441"

> replaceRepeats("000000000000", 0);
> "12"

> replaceRepeats("123456789", 1);
> "123456789"
```

---

<!-- [Solution Playground](https://tsplay.dev/wRqoYW) -->
