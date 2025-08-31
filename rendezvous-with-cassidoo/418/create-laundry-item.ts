export const laundrySteps = ["soak", "wash", "rinse", "spin", "dry"] as const;

export type TLaundryStep = (typeof laundrySteps)[number] | "done";

type TLaundryGenerator = {
	nextCycle: () => TLaundryStep;
};

export const createLaundryItem = (): TLaundryGenerator => {
	const remainingSteps = laundrySteps.slice();
	return {
		nextCycle: () => remainingSteps.shift() ?? "done",
	};
};
