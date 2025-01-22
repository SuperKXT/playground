type TLog = {
	name: string;
	time: number;
	event: "start" | "end";
};

type TTuple<T, Res extends 1[] = []> = 0 extends 1
	? never
	: Res["length"] extends T
		? Res
		: TTuple<T, [...Res, 1]>;

type TSubtract<M extends number, S extends number> =
	TTuple<M> extends [...TTuple<S>, ...infer Rest] ? Rest["length"] : never;

type TCalculateExecutionTimes<
	Logs extends TLog[],
	res extends Record<string, number> = {},
> = Logs extends [infer first extends TLog, ...infer rest extends TLog[]]
	? first["event"] extends "start"
		? TCalculateExecutionTimes<
				rest,
				Omit<res, first["name"]> & Record<first["name"], first["time"]>
			>
		: TCalculateExecutionTimes<
				rest,
				{
					[k in keyof res]: k extends first["name"]
						? TSubtract<first["time"], res[k]>
						: res[k];
				}
			>
	: res;

export const calculateExecutionTimes = <const Logs extends [TLog, ...TLog[]]>(
	logs: Logs,
): TCalculateExecutionTimes<Logs> => {
	const times: Record<string, number> = {};
	for (const curr of logs) {
		if (curr.event === "start") {
			times[curr.name] = curr.time;
		} else {
			times[curr.name] = curr.time - (times[curr.name] ?? 0);
		}
	}
	return times as never;
};
