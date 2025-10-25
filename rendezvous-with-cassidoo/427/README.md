# splitByWidths

[issue #427 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/change-your-life-today-dont-gamble-on-the-future/)

Given a string str and an array of positive integers widths,
write a function that splits the string into lines,
each with the exact number of characters as specified by
the corresponding width.

Return an array of the substrings.

Use the last width for any remaining characters if the array is shorter than needed.

Example:

```ts
// cSpell: disable
const str = "Supercalifragilisticexpialidocious";
const widths = [5, 9, 4];

> splitByWidths(str, widths);
> ['Super', 'califragi', 'list', 'icex', 'pial', 'idoc', 'ious']
// cSpell: enable
```

---

<!-- [Solution Playground](https://tsplay.dev/NlrlOW) -->
