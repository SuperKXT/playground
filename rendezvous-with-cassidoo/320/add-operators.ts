const operators = ["+", "-", "*", "/"] as const;

type TResult = { string: string; amount: number };

const digitOperate = (
	[first, ...rest]: string[],
	string: string = "",
	amount?: number,
): TResult[] => {
	const results: TResult[] = [];
	if (!first) return [];
	if (amount === undefined) {
		for (const result of digitOperate(rest, first, Number(first)))
			results.push(result);
	} else {
		for (const operator of operators) {
			let nextAmount = amount;
			const nextString = string + (string ? operator : "") + first;
			switch (operator) {
				case "+":
					nextAmount += Number(first);
					break;
				case "-":
					nextAmount -= Number(first);
					break;
				case "*":
					nextAmount *= Number(first);
					break;
				case "/":
					nextAmount /= Number(first);
					break;
			}
			if (rest.length)
				for (const result of digitOperate(rest, nextString, nextAmount))
					results.push(result);
			else results.push({ string: nextString, amount: nextAmount });
		}
	}

	return results;
};

export const addOperators = (source: number, target: number) => {
	const results = digitOperate(Array.from(source.toString()));
	return results
		.filter((row) => row.amount === target)
		.map((row) => row.string);
};
