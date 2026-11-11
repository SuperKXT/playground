import { expect, test } from "vitest";

import {
	decodeEntities,
	getIssueUrl,
	parseExamples,
	parseIssue,
	renderExamples,
	scaffold,
	toKebabCase,
	wrapText,
} from "./scaffold.js";

const getPage = (issue: number, question: string, examples: string) => `
<title>rendezvous with cassidoo - Issue #${issue}</title>
<h2 id="interview-question-of-the-week">Interview question of the week</h2>
<p>Last week, I had you do <a href="#">something else</a>!</p>
<p>This week’s question:<br />
${question}
<br /></p>
<p>Examples: <br /></p>
<pre class="astro-code" tabindex="0"><code>${examples}</code></pre>
<p>(you can submit your answers by replying to this email)</p>
<h2 id="cool-things">Cool things</h2>
<pre><code>unrelated()</code></pre>
`;

const FROST = getPage(
	476,
	"<strong>Given an array of daily temperatures and a number <code>drop</code>, return an array where each element is how many days you’d wait until it’s at least <code>drop</code> degrees colder than that day. If that never happens, put 0.</strong>",
	[
		'<span class="line"><span>&gt;</span><span> firstFrost</span>([70, 68, 72, 60, 65, 55], 5)</span>',
		"&gt; [3, 2, 1, 2, 1, 0]",
		"",
		"&gt; firstFrost([50, 49, 48], 5)",
		"&gt; [0, 0, 0]",
	].join("\n"),
);

const ROUNDS = getPage(
	482,
	"<strong>Given <code>rounds</code> in a board game, where <code>rounds[r][p]</code> is the points, find the earliest round</strong>. Return the round number, or <code>-1</code> if tied.",
	["&gt; comebackRound([", "  [4, 2],", "  [1, 3],", "]);", "&gt; -1"].join(
		"\n",
	),
);

test("testing getIssueUrl", () => {
	expect(getIssueUrl(476)).toBe("https://cassidoo.co/newsletter/2026-09-27/");
	expect(getIssueUrl(482)).toBe("https://cassidoo.co/newsletter/2026-11-08/");
	expect(getIssueUrl(470)).toBe("https://cassidoo.co/newsletter/2026-08-16/");
	expect(getIssueUrl(476, 1)).toBe(
		"https://cassidoo.co/newsletter/2026-10-04/",
	);
});

test("testing toKebabCase", () => {
	expect(toKebabCase("firstFrost")).toBe("first-frost");
	expect(toKebabCase("ghostwriter")).toBe("ghostwriter");
	expect(toKebabCase("parseHTMLString")).toBe("parse-html-string");
	expect(toKebabCase("sum2Numbers")).toBe("sum2-numbers");
});

test("testing decodeEntities", () => {
	expect(decodeEntities("&gt; a &amp;&amp; b &#39;c&#x27; &quot;d&quot;")).toBe(
		"> a && b 'c' \"d\"",
	);
	expect(decodeEntities("&unknown;")).toBe("&unknown;");
});

test("testing wrapText", () => {
	const text =
		"Given the dimensions of a large rectangle `n x m` and a second rectangle `a x b`, return the maximum number";
	const wrapped = wrapText(text, 40).split("\n");

	expect(wrapped.every((line) => line.length <= 40)).toBe(true);
	expect(wrapped.join(" ")).toBe(text);
	// inline code is never broken across lines
	expect(wrapText("aaaa `b c d e` f", 8)).toBe("aaaa\n`b c d e`\nf");
});

test("testing parseIssue", () => {
	const parsed = parseIssue(FROST);

	expect(parsed.issue).toBe(476);
	expect(parsed.description).toStrictEqual([
		"Given an array of daily temperatures and a number `drop`, return an array where each element is how many days you’d wait until it’s at least `drop` degrees colder than that day. If that never happens, put 0.",
	]);
	expect(parsed.exampleLines).toStrictEqual([
		"> firstFrost([70, 68, 72, 60, 65, 55], 5)",
		"> [3, 2, 1, 2, 1, 0]",
		"",
		"> firstFrost([50, 49, 48], 5)",
		"> [0, 0, 0]",
	]);
});

test("testing parseIssue with text after the bold question", () => {
	expect(parseIssue(ROUNDS).description).toStrictEqual([
		"Given `rounds` in a board game, where `rounds[r][p]` is the points, find the earliest round.",
		"Return the round number, or `-1` if tied.",
	]);
});

test("testing parseIssue against an invalid page", () => {
	expect(() => parseIssue("<title>nope</title>")).toThrow("issue number");
	expect(() => parseIssue("<title>Issue #1</title>")).toThrow(
		"interview question",
	);
});

test("testing parseExamples", () => {
	const examples = parseExamples([
		"> getSundays(2024, 2)",
		"> [ '2024-02-04', '2024-02-11' ]",
		"> ",
		'ghostwriter("a#~b")',
		"> 'b' // a comment",
		"",
		"> grid([",
		"  [2, 1],",
		"])",
		"> -1",
		"",
		"isValid({ a: 1, b: [] });",
		"true",
	]);

	expect(examples.map(({ call }) => call)).toStrictEqual([
		{ name: "getSundays", args: ["2024", "2"], argTypes: ["number", "number"] },
		{ name: "ghostwriter", args: ['"a#~b"'], argTypes: ["string"] },
		{ name: "grid", args: ["[\n  [2, 1],\n]"], argTypes: ["number[][]"] },
		{
			name: "isValid",
			args: ["{ a: 1, b: [] }"],
			argTypes: ["{ a: number; b: unknown[] }"],
		},
	]);
	expect(examples.map(({ expected }) => expected)).toStrictEqual([
		{ text: "[ '2024-02-04', '2024-02-11' ]", type: "string[]" },
		{ text: "'b'", type: "string" },
		{ text: "-1", type: "number", cast: "number" },
		{ text: "true", type: "boolean", cast: "boolean" },
	]);
	expect(examples.map(({ callLines }) => callLines)).toStrictEqual([
		1, 1, 3, 1,
	]);
});

test("testing parseExamples with mixed arrays", () => {
	const [example] = parseExamples([
		'mix([1, "a"], [{ id: 1 }])',
		"> [[1], []]",
	]);

	expect(example?.call?.argTypes).toStrictEqual([
		"Array<number | string>",
		"Array<{ id: number }>",
	]);
	expect(example?.expected?.type).toBe("number[][]");
});

test("testing parseExamples against unparsable examples", () => {
	const examples = parseExamples([
		"> getDate(new Date())",
		"> 5",
		"",
		"> print(5)",
		"> five, as a word",
	]);

	expect(examples[0]?.call).toBeUndefined();
	expect(examples[1]?.call?.name).toBe("print");
	expect(examples[1]?.expected).toBeUndefined();
});

test("testing renderExamples", () => {
	const lines = [
		"> first([1, 2], 5)",
		"> [3]",
		"",
		"second(2)",
		"> 2",
		"",
		"third([0, 3]);",
		"[3, 0]",
		"",
		"> grid([",
		"  [2, 1],",
		"])",
		"> 4",
	];

	expect(renderExamples(parseExamples(lines))).toBe(
		[
			"> first([1, 2], 5);",
			"> [3]",
			"",
			"second(2);",
			"> 2",
			"",
			"third([0, 3]);",
			"> [3, 0]",
			"",
			"> grid([",
			"  [2, 1],",
			"]);",
			"> 4",
		].join("\n"),
	);
});

test("testing scaffold", () => {
	const url = getIssueUrl(476);
	const result = scaffold(parseIssue(FROST), url);

	expect(result.name).toBe("firstFrost");
	expect(result.todo).toBe(0);
	expect(Object.keys(result.files)).toStrictEqual([
		"README.md",
		"first-frost.ts",
		"first-frost.test.ts",
	]);
	expect(result.files["README.md"]).toBe(
		[
			"# firstFrost",
			"",
			`[issue #476 of rendezvous with cassidoo.](${url})`,
			"",
			"Given an array of daily temperatures and a number `drop`, return an array where",
			"each element is how many days you’d wait until it’s at least `drop` degrees",
			"colder than that day. If that never happens, put 0.",
			"",
			"Examples:",
			"",
			"```ts",
			"> firstFrost([70, 68, 72, 60, 65, 55], 5);",
			"> [3, 2, 1, 2, 1, 0]",
			"",
			"> firstFrost([50, 49, 48], 5);",
			"> [0, 0, 0]",
			"```",
			"",
		].join("\n"),
	);
	expect(result.files["first-frost.ts"]).toBe(
		[
			"export const firstFrost = (arr: number[], num: number): number[] => {",
			'\tthrow new Error("Not implemented");',
			"};",
			"",
		].join("\n"),
	);
	expect(result.files["first-frost.test.ts"]).toContain(
		[
			'import { expect, expectTypeOf, test } from "vitest";',
			"",
			'import { firstFrost } from "./first-frost.js";',
			"",
			'test("testing firstFrost against test 1", () => {',
			"\tconst result = firstFrost([70, 68, 72, 60, 65, 55], 5);",
			"\tconst expected = [3, 2, 1, 2, 1, 0];",
			"",
			"\texpect(result).toStrictEqual(expected);",
			"",
			"\texpectTypeOf<typeof result>(result).toEqualTypeOf(expected);",
			"});",
			"",
			'test("testing firstFrost against test 2", () => {',
		].join("\n"),
	);
});

test("testing scaffold names params after the description", () => {
	const result = scaffold(parseIssue(ROUNDS), "url");

	expect(result.files["comeback-round.ts"]).toContain(
		"(rounds: number[][]): number =>",
	);
	expect(result.files["comeback-round.test.ts"]).toContain(
		"const expected = -1 as number;",
	);
});

test("testing scaffold against unparsable examples", () => {
	const page = getPage(
		500,
		"<strong>Print it.</strong>",
		"&gt; print(new Date())\n&gt; today",
	);

	expect(() => scaffold(parseIssue(page), "url")).toThrow("function name");

	const result = scaffold(parseIssue(page), "url", "print");

	expect(result.todo).toBe(1);
	expect(result.files["print.ts"]).toContain(
		"export const print = (): unknown",
	);
	expect(result.files["print.test.ts"]).toBe(
		[
			'import { test } from "vitest";',
			"",
			'import { print } from "./print.js";',
			"",
			"// TODO: could not parse this example",
			"// > print(new Date())",
			"// > today",
			'test.todo("testing print against test 1");',
			"",
		].join("\n"),
	);
});
