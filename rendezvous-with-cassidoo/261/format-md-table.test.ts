import { expect, test } from "vitest";

import { formatMarkdownTable } from "./format-md-table.js";

type TTest = {
	input: string;
	output: string;
};

const TESTS: TTest[] = [
	{
		input: [
			"| Syntax | Description |",
			"| --- | ----------- |",
			"| Header | Title |",
			"| Paragraph | Text |",
		].join("\n"),
		output: [
			"| Syntax    | Description |",
			"| --------- | ----------- |",
			"| Header    | Title       |",
			"| Paragraph | Text        |",
		].join("\n"),
	},
	{
		input: [
			"",
			"| Syntax     | Description |",
			"| --- |      ----------- |",
			"| Header | Title | Extra | ",
			"   | Paragraph | Text |   ",
			"",
		].join("\n"),
		output: [
			"| Syntax    | Description |",
			"| --------- | ----------- |",
			"| Header    | Title       |",
			"| Paragraph | Text        |",
		].join("\n"),
	},
	{
		input: [
			"",
			"| Syntax     | Description | Extra |",
			"     | --- |      ----------- |",
			"| Header | Title | Ex |  ",
			"   | Paragraph | Text |   ",
			"",
		].join("\n"),
		output: [
			"| Syntax    | Description | Extra |",
			"| --------- | ----------- | ----- |",
			"| Header    | Title       | Ex    |",
			"| Paragraph | Text        |       |",
		].join("\n"),
	},
	{
		input: [
			"",
			"| Syntax     | Description |",
			"| --- |      ----------- |",
			"| Header | Title | Extra |",
			"   | Paragraph | Text |   ",
			"",
		].join("\n"),
		output: [
			"| Syntax    | Description |",
			"| --------- | ----------- |",
			"| Header    | Title       |",
			"| Paragraph | Text        |",
		].join("\n"),
	},
	{
		input: "",
		output: "",
	},
];
test.each(TESTS)("testing formatMarkdownTable", ({ input, output }) => {
	const formatted = formatMarkdownTable(input);
	expect(formatted).toStrictEqual(output);
});
