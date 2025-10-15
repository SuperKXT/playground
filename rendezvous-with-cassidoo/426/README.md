# csvToList

[issue #426 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/the-best-relationships-develop-out-of-friendships/)

Given a CSV string where each row contains a name, age, and city
(and values may be quoted, have embedded commas or escaped quotes),
write a function that parses the CSV and outputs a formatted list
of strings in the form: "Name, age Age, from City".

Handle quoted fields containing commas and escaped quotes.

Example:

```ts
// cSpell: disable
const csv = 'name,age,city\n"Ryu, Mi-yeong",30,"Seoul"\nZoey,24,"Burbank"';

csvToList(csv);
> `
- Ryu, Mi-yeong, age 30, from Seoul
- Zoey, age 24, from Burbank
`;
// cSpell: enable
```

---

<!-- [Solution Playground](https://tsplay.dev/NlrlOW) -->
