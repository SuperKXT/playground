# toggleChar

[issue #457 of rendezvous with cassidoo.](https://buttondown.com/cassidoo/archive/u1f49c-technology-is-cool-but-youve-got-to-use-it/)

Given a string s consisting of letters, convert each character to its opposite case that is,
change every lowercase letter to uppercase, and every uppercase letter to lowercase.

Bonus: add an "alternate" parameter that converts the whole string to `AlTeRnAtE cAsE`!

Examples:

```ts
toggleChar("Hello, world!");
> "hELLO, WORLD!";

toggleChar("HeheHeheHEheheHeH"); // cSpell: disable-line
> "hEHEhEHEheHEHEhEh";

toggleChar("This will be alternated", true);
> "ThIs WiLl Be AlTeRnAtEd";
```
