export const evaluatePostfix = (expression: string): number => {
	let left: number | undefined;
	let right: number | undefined;

	for (const char of expression) {
		const num = Number(char);
		if (!isNaN(num)) {
			if (left === undefined) left = num;
			else if (right === undefined) right = num;
			else throw new Error("Invalid postfix expression");
			continue;
		}
		if (!left || !right) throw new Error("Invalid postfix expression");
		switch (char) {
			case "+":
				left += right;
				break;
			case "-":
				left -= right;
				break;
			case "*":
				left *= right;
				break;
			case "/":
				left /= right;
				break;
			default:
				throw new Error("Invalid postfix expression");
		}
		right = undefined;
	}

	if (left === undefined || right !== undefined)
		throw new Error("Invalid postfix expression");

	return left;
};
