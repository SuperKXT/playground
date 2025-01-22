type TPrettify<T> = { [k in keyof T]: T[k] } & {};

type TDeleteVar<
	Map extends Record<string, unknown>,
	Name extends string,
> = Map[Name] extends [infer dep extends string, ...unknown[]]
	? TPrettify<Omit<TDeleteVar<Map, dep>, Name>>
	: TPrettify<Omit<Map, Name>>;

type TUpdateMap<
	str extends string,
	Lookup extends { vars: string[]; map: Record<string, unknown> },
	name extends string = "",
	val extends string = "",
	eqFound extends boolean = false,
> = str extends `${infer curr}${infer rest}`
	? curr extends " "
		? TUpdateMap<rest, Lookup, name, val, eqFound>
		: curr extends "="
			? TUpdateMap<rest, Lookup, name, val, true>
			: TUpdateMap<
					rest,
					Lookup,
					eqFound extends true ? name : `${name}${curr}`,
					eqFound extends true ? `${val}${curr}` : val,
					eqFound
				>
	: {
			vars: [...Lookup["vars"], name];
			map: Lookup["map"] & Record<name, [val]>;
		};

type TReturnUnused<
	Vars extends string[],
	Map extends Record<string, unknown>,
> = Vars extends [infer curr extends string, ...infer rest extends string[]]
	? Map[curr] extends string[]
		? [curr, ...TReturnUnused<rest, Map>]
		: TReturnUnused<rest, Map>
	: [];

type TFindUnused<
	Arr extends string[],
	Lookup extends { vars: string[]; map: Record<string, unknown> } = {
		vars: [];
		map: {};
	},
> = Arr extends [infer curr extends string, ...infer rest extends string[]]
	? curr extends `log(${infer name extends string})`
		? TFindUnused<
				rest,
				{ vars: Lookup["vars"]; map: TDeleteVar<Lookup["map"], name> }
			>
		: TFindUnused<rest, TUpdateMap<curr, Lookup>>
	: TReturnUnused<Lookup["vars"], Lookup["map"]>;

const deleteVar = (vars: Map<string, string[]>, varName: string) => {
	const curr = vars.get(varName);
	if (!curr) return;
	for (const v of curr) deleteVar(vars, v);
	vars.delete(varName);
};

export const findUnused = <const Arr extends [string, ...string[]]>(
	arr: Arr,
): TFindUnused<Arr> => {
	const vars = new Map<string, string[]>();
	for (const curr of arr) {
		const log = curr.match(/log\((.*)\)/u);
		if (log?.[1]) {
			const varVal = log[1].trim();
			deleteVar(vars, varVal);
		} else {
			const [varStr, expr] = curr.split("=");
			const dep = expr?.trim();
			if (varStr) vars.set(varStr.trim(), dep && vars.has(dep) ? [dep] : []);
		}
	}
	return Array.from(vars.keys()) as never;
};
