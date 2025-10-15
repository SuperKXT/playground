type _TCsvToList<
	Input extends string,
	res extends string = "",
	line extends string = "",
	inQuote extends boolean = false,
	reading extends "name" | "age" | "city" = "name",
> = Input extends `${infer char}${infer rest}`
	? char extends '"'
		? _TCsvToList<rest, res, line, Exclude<boolean, inQuote>, reading>
		: inQuote extends true
			? _TCsvToList<rest, res, `${line}${char}`, inQuote, reading>
			: char extends "\n"
				? _TCsvToList<rest, `${res}\n- ${line}`>
				: char extends ","
					? _TCsvToList<
							rest,
							res,
							`${line}, ${reading extends "name" ? "age" : reading extends "age" ? "from" : ""} `,
							false,
							reading extends "name"
								? "age"
								: reading extends "age"
									? "city"
									: "name"
						>
					: _TCsvToList<rest, res, `${line}${char}`, inQuote, reading>
	: `${res}\n- ${line}\n`;

type TCsvToList<Input extends string> = Input extends `${string}\n${infer rest}`
	? _TCsvToList<rest>
	: never;

export const csvToList = <Input extends string>(
	input: Input,
): TCsvToList<Input> => {
	let res = "";
	let line = "";
	let inQuote = false;
	let isStarted = false;
	let reading: "name" | "age" | "city" = "name";
	for (const char of input) {
		if (!isStarted) {
			if (char === "\n") isStarted = true;
			continue;
		}
		if (char === '"') inQuote = !inQuote;
		else if (inQuote) {
			line += char;
			continue;
		} else if (char === "\n") {
			res += `\n- ${line}`;
			line = "";
			reading = "name";
		} else if (char === ",") {
			line += `, ${reading === "name" ? "age" : reading === "age" ? "from" : ""} `;
			reading =
				reading === "name" ? "age" : reading === "age" ? "city" : "name";
		} else {
			line += char;
		}
	}
	res += `\n- ${line}\n`;
	return res as never;
};
