import ts from "typescript";

/** a known issue used to compute the publish date of any other issue */
const ANCHOR = { issue: 476, date: Date.UTC(2026, 8, 27) };
const WEEK = 7 * 24 * 60 * 60 * 1000;
const WRAP_WIDTH = 80;

export type TParsedIssue = {
	issue: number;
	/** description paragraphs as markdown, unwrapped */
	description: string[];
	/** the raw lines of the examples code block */
	exampleLines: string[];
};

export type TExample = {
	/** the lines as they appear in the newsletter */
	raw: string[];
	/** how many of the raw lines make up the function call */
	callLines: number;
	call?: { name: string; args: string[]; argTypes: string[] };
	expected?: { text: string; type: string; cast?: string };
};

export type TScaffold = {
	name: string;
	fileName: string;
	/** the number of examples that could not be turned into a test */
	todo: number;
	files: Record<string, string>;
};

export const getIssueUrl = (issue: number, weekOffset = 0): string => {
	const time = ANCHOR.date + (issue - ANCHOR.issue + weekOffset) * WEEK;
	const date = new Date(time).toISOString().slice(0, 10);
	return `https://cassidoo.co/newsletter/${date}/`;
};

export const toKebabCase = (name: string): string => {
	return name
		.replace(/([a-z0-9])([A-Z])/gu, "$1-$2")
		.replace(/([A-Z])([A-Z][a-z])/gu, "$1-$2")
		.toLowerCase();
};

const ENTITIES: Record<string, string> = {
	amp: "&",
	apos: "'",
	gt: ">",
	lt: "<",
	nbsp: " ",
	quot: '"',
	rsquo: "’",
};

export const decodeEntities = (text: string): string => {
	return text.replace(
		/&(?:#x([0-9a-f]+)|#(\d+)|([a-z]+));/giu,
		(match, hex?: string, dec?: string, named?: string) => {
			if (hex) return String.fromCodePoint(parseInt(hex, 16));
			if (dec) return String.fromCodePoint(Number(dec));
			return ENTITIES[(named as string).toLowerCase()] ?? match;
		},
	);
};

const stripTags = (html: string): string => html.replace(/<[^>]+>/gu, "");

const htmlToMarkdown = (html: string): string => {
	const withCode = html
		.replace(/<code[^>]*>([\s\S]*?)<\/code>/giu, "`$1`")
		.replace(/<br\s*\/?>/giu, " ");
	return decodeEntities(stripTags(withCode)).replace(/\s+/gu, " ").trim();
};

export const parseIssue = (html: string): TParsedIssue => {
	const issue = /<title>[^<]*Issue #(\d+)/iu.exec(html)?.[1];
	if (!issue) throw new Error("Could not find the issue number in the page");

	const start = html.indexOf('id="interview-question-of-the-week"');
	if (start < 0) throw new Error("Could not find the interview question");
	const end = html.indexOf("<h2", start);
	const section = html.slice(start, end < 0 ? undefined : end);

	const question =
		/This week(?:’|'|&#39;|&#x27;|&rsquo;)s question:\s*(?:<br\s*\/?>)?([\s\S]*?)<\/p>/iu.exec(
			section,
		);
	if (!question) throw new Error("Could not find this week's question");

	const description: string[] = [];
	for (const part of (question[1] as string).split(/<\/strong>/iu)) {
		let paragraph = htmlToMarkdown(part);
		// punctuation left outside the bold text belongs to the previous paragraph
		const leading = /^[.,;:!?]+/u.exec(paragraph)?.[0];
		if (leading && description.length) {
			description[description.length - 1] =
				`${description.at(-1) ?? ""}${leading}`;
			paragraph = paragraph.slice(leading.length).trim();
		}
		if (paragraph) description.push(paragraph);
	}

	const pre = /<pre[^>]*>([\s\S]*?)<\/pre>/iu.exec(
		section.slice(question.index),
	);
	const exampleLines = pre
		? decodeEntities(stripTags(pre[1] as string))
				.split("\n")
				.map((line) => line.trimEnd())
		: [];

	return { issue: Number(issue), description, exampleLines };
};

/** wrap text to the given width, without breaking inside inline code */
export const wrapText = (text: string, width = WRAP_WIDTH): string => {
	const lines: string[] = [];
	let line = "";
	for (const word of text.match(/(?:`[^`]*`|[^\s`])+/gu) ?? []) {
		if (line && line.length + 1 + word.length > width) {
			lines.push(line);
			line = word;
		} else {
			line = line ? `${line} ${word}` : word;
		}
	}
	if (line) lines.push(line);
	return lines.join("\n");
};

const parse = (code: string): ts.SourceFile | undefined => {
	const file = ts.createSourceFile(
		"example.ts",
		code,
		ts.ScriptTarget.Latest,
		true,
	);
	const { parseDiagnostics } = file as unknown as {
		parseDiagnostics: unknown[];
	};
	return parseDiagnostics.length ? undefined : file;
};

const isNumeric = (node: ts.Node): boolean => {
	if (ts.isNumericLiteral(node)) return true;
	if (ts.isIdentifier(node)) return ["Infinity", "NaN"].includes(node.text);
	return (
		ts.isPrefixUnaryExpression(node) &&
		[ts.SyntaxKind.MinusToken, ts.SyntaxKind.PlusToken].includes(
			node.operator,
		) &&
		isNumeric(node.operand)
	);
};

const isArrayType = (type: string): boolean => {
	return type.endsWith("[]") || type.startsWith("Array<");
};

const unionOf = (types: string[]): string => {
	let unique = [...new Set(types)];
	// an empty array tells nothing if another example has a typed one
	if (unique.some((type) => isArrayType(type) && type !== "unknown[]")) {
		unique = unique.filter((type) => type !== "unknown[]");
	}
	return unique.join(" | ") || "unknown";
};

/** infer the type of a literal expression, `undefined` if it is not a literal */
const inferType = (node: ts.Node): string | undefined => {
	if (isNumeric(node)) return "number";
	if (ts.isStringLiteralLike(node)) return "string";
	if (ts.isBigIntLiteral(node)) return "bigint";
	if (
		node.kind === ts.SyntaxKind.TrueKeyword ||
		node.kind === ts.SyntaxKind.FalseKeyword
	) {
		return "boolean";
	}
	if (node.kind === ts.SyntaxKind.NullKeyword) return "null";
	if (ts.isIdentifier(node) && node.text === "undefined") return "undefined";
	if (ts.isArrayLiteralExpression(node)) {
		const types: string[] = [];
		for (const element of node.elements) {
			const type = inferType(element);
			if (!type) return undefined;
			types.push(type);
		}
		const union = unionOf(types);
		return /^[\w[\]]+$/u.test(union) ? `${union}[]` : `Array<${union}>`;
	}
	if (ts.isObjectLiteralExpression(node)) {
		const props: string[] = [];
		for (const prop of node.properties) {
			if (
				!ts.isPropertyAssignment(prop) ||
				ts.isComputedPropertyName(prop.name)
			)
				return undefined;
			const type = inferType(prop.initializer);
			if (!type) return undefined;
			props.push(`${prop.name.getText()}: ${type}`);
		}
		return props.length ? `{ ${props.join("; ")} }` : "Record<string, unknown>";
	}
	return undefined;
};

const parseCall = (code: string): TExample["call"] => {
	const statements = parse(code)?.statements;
	const statement = statements?.[0];
	if (statements?.length !== 1 || !statement) return undefined;
	if (!ts.isExpressionStatement(statement)) return undefined;
	const call = statement.expression;
	if (!ts.isCallExpression(call) || !ts.isIdentifier(call.expression))
		return undefined;
	const argTypes: string[] = [];
	for (const arg of call.arguments) {
		const type = inferType(arg);
		if (!type) return undefined;
		argTypes.push(type);
	}
	return {
		name: call.expression.text,
		args: call.arguments.map((arg) => arg.getText()),
		argTypes,
	};
};

const parseExpected = (code: string): TExample["expected"] => {
	const statements = parse(`const expected = ${code}`)?.statements;
	const statement = statements?.[0];
	if (statements?.length !== 1 || !statement) return undefined;
	if (!ts.isVariableStatement(statement)) return undefined;
	const declarations = statement.declarationList.declarations;
	const value = declarations[0]?.initializer;
	if (declarations.length !== 1 || !value) return undefined;
	const type = inferType(value);
	if (!type) return undefined;
	const cast = ["number", "boolean"].includes(type) ? type : undefined;
	return { text: value.getText(), type, ...(cast && { cast }) };
};

const stripPrompt = (line: string): string => line.replace(/^>\s?/u, "");

export const parseExamples = (lines: string[]): TExample[] => {
	const blocks: string[][] = [];
	let block: string[] = [];
	for (const line of lines) {
		if (stripPrompt(line).trim()) {
			block.push(line);
		} else if (block.length) {
			blocks.push(block);
			block = [];
		}
	}
	if (block.length) blocks.push(block);

	return blocks.map((raw) => {
		const code = raw.map(stripPrompt);
		for (let count = 1; count <= code.length; count++) {
			const call = parseCall(code.slice(0, count).join("\n"));
			if (!call) continue;
			const expected = parseExpected(code.slice(count).join("\n"));
			return { raw, callLines: count, call, ...(expected && { expected }) };
		}
		return { raw, callLines: 0 };
	});
};

/**
 * render the examples for the readme. a semicolon after each call
 * and a prompt before each result stop prettier from parsing the
 * block as valid code and reformatting it.
 */
export const renderExamples = (examples: TExample[]): string => {
	return examples
		.map(({ raw, callLines }) => {
			return raw
				.map((line, idx) => {
					if (idx === callLines - 1 && !line.endsWith(";")) return `${line};`;
					if (callLines && idx === callLines && !line.startsWith(">"))
						return `> ${line}`;
					return line;
				})
				.join("\n");
		})
		.join("\n\n");
};

const FALLBACK_NAMES: Array<[suffix: string, name: string]> = [
	["[][]", "grid"],
	["[]", "arr"],
	[">", "arr"],
	["string", "str"],
	["number", "num"],
	["boolean", "bool"],
];

/** name the parameters after the identifiers quoted in the description */
const getParamNames = (description: string[], types: string[]): string[] => {
	const quoted = description
		.join(" ")
		.matchAll(/`([A-Za-z_$][\w$]*)(?:\[[^`]*)?`/gu);
	const candidates = [
		...new Set([...quoted].map((match) => match[1] as string)),
	];
	if (candidates.length >= types.length) {
		return candidates.slice(0, types.length);
	}
	const names = types.map((type) => {
		return (
			FALLBACK_NAMES.find(([suffix]) => type.endsWith(suffix))?.[1] ?? "arg"
		);
	});
	return names.map((name, idx) => {
		if (names.filter((curr) => curr === name).length === 1) return name;
		return `${name}${names.slice(0, idx + 1).filter((curr) => curr === name).length}`;
	});
};

const renderTest = (name: string, example: TExample, idx: number): string => {
	const title = `"testing ${name} against test ${idx + 1}"`;
	const { call, expected } = example;
	if (!call || !expected) {
		return [
			"// TODO: could not parse this example",
			...example.raw.map((line) => `// ${line}`),
			`test.todo(${title});`,
		].join("\n");
	}
	const cast = expected.cast ? ` as ${expected.cast}` : "";
	return [
		`test(${title}, () => {`,
		`\tconst result = ${name}(${call.args.join(", ")});`,
		`\tconst expected = ${expected.text}${cast};`,
		"",
		"\texpect(result).toStrictEqual(expected);",
		"",
		"\texpectTypeOf<typeof result>(result).toEqualTypeOf(expected);",
		"});",
	].join("\n");
};

export const scaffold = (
	parsed: TParsedIssue,
	url: string,
	nameOverride?: string,
): TScaffold => {
	const examples = parseExamples(parsed.exampleLines);
	const calls = examples.flatMap(({ call }) => call ?? []);
	const name = nameOverride ?? calls[0]?.name;
	if (!name) {
		throw new Error(
			"Could not find the function name in the examples, pass it after the issue number",
		);
	}
	const fileName = toKebabCase(name);

	const readme = [
		`# ${name}`,
		`[issue #${parsed.issue} of rendezvous with cassidoo.](${url})`,
		...parsed.description.map((paragraph) => wrapText(paragraph)),
		...(examples.length
			? ["Examples:", `\`\`\`ts\n${renderExamples(examples)}\n\`\`\``]
			: []),
	].join("\n\n");

	const usable = calls.filter((call) => call.name === name);
	const arity = Math.max(0, ...usable.map((call) => call.args.length));
	const paramTypes = Array.from({ length: arity }, (_, idx) => {
		return unionOf(usable.flatMap((call) => call.argTypes[idx] ?? []));
	});
	const paramNames = getParamNames(parsed.description, paramTypes);
	const params = paramTypes.map(
		(type, idx) => `${paramNames[idx] ?? "arg"}: ${type}`,
	);
	const returnType = unionOf(
		examples.flatMap(({ expected }) => expected?.type ?? []),
	);
	const solution = [
		`export const ${name} = (${params.join(", ")}): ${returnType} => {`,
		'\tthrow new Error("Not implemented");',
		"};",
	].join("\n");

	const tests = examples.length
		? examples.map((example, idx) => renderTest(name, example, idx))
		: [`test.todo("testing ${name} against test 1");`];
	const todo = tests.filter((curr) => curr.includes("test.todo(")).length;
	const imports = todo === tests.length ? "test" : "expect, expectTypeOf, test";
	const test = [
		`import { ${imports} } from "vitest";`,
		`import { ${name} } from "./${fileName}.js";`,
		...tests,
	].join("\n\n");

	return {
		name,
		fileName,
		todo,
		files: {
			"README.md": `${readme}\n`,
			[`${fileName}.ts`]: `${solution}\n`,
			[`${fileName}.test.ts`]: `${test}\n`,
		},
	};
};
