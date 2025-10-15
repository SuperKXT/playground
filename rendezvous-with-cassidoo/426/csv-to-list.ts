export const csvToList = (input: string): string => {
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
	return res;
};
