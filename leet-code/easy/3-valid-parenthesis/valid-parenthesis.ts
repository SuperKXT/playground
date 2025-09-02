export const validParenthesis = (str: string) => {
	const stack: string[] = [];
	for (const char of str) {
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char);
		} else if (char === ")" || char === "]" || char === "}") {
			const top = stack.pop();
			if (char === ")" && top !== "(") return false;
			if (char === "]" && top !== "[") return false;
			if (char === "}" && top !== "{") return false;
		}
	}
	return true;
};
