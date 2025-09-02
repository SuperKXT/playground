const stackMap = {
	"(": ")",
	"[": "]",
	"{": "}",
} as const;

type TStackMap = typeof stackMap;

type TValidParenthesis<
	Str extends string,
	stack extends unknown[] = [],
> = Str extends `${infer first}${infer rest}`
	? first extends "(" | "[" | "{"
		? TValidParenthesis<rest, [first, ...stack]>
		: first extends ")" | "]" | "}"
			? stack extends [infer top extends keyof TStackMap, ...infer newStack]
				? (typeof stackMap)[top] extends first
					? TValidParenthesis<rest, newStack>
					: false
				: false
			: TValidParenthesis<rest, stack>
	: stack["length"] extends 0
		? true
		: false;

export const validParenthesis = <const Str extends string>(
	str: Str,
): TValidParenthesis<Str> => {
	const stack: string[] = [];
	for (const char of str) {
		if (char === "(" || char === "[" || char === "{") {
			stack.push(char);
		} else if (char === ")" || char === "]" || char === "}") {
			const top = stack.pop();
			if (stackMap[top as keyof TStackMap] !== char) return false as never;
		}
	}
	if (stack.length > 0) return false as never;
	return true as never;
};
