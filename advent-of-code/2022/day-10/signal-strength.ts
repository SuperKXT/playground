const COMMANDS = ["addx", "noop"] as const;

type TCommand = (typeof COMMANDS)[number];

const isCommand = (value: unknown): value is TCommand =>
	typeof value === "string" && COMMANDS.includes(value);

type TSolution = {
	strength: number;
	crtOutput: string;
};

type TClock = {
	cycle: number;
	register: number;
	target: number;
};

const getCrtOutput = ({
	register,
	cycle,
}: TClock): "." | "\n." | "\n#" | "#" => {
	const sprite = [register - 1, register, register + 1];
	const position = (cycle - 1) % 40;
	const isEol = cycle > 1 && position === 0;
	return sprite.includes(position)
		? `${isEol ? "\n" : ""}#`
		: `${isEol ? "\n" : ""}.`;
};

export const signalStrength = (input: string): TSolution => {
	const clock: TClock = {
		cycle: 0,
		register: 1,
		target: 20,
	};

	const solution: TSolution = {
		crtOutput: "",
		strength: 0,
	};

	for (const row of input.split("\n")) {
		const [command, num] = row.split(" ");
		if (!isCommand(command) || (command === "addx" && isNaN(Number(num))))
			continue;

		const prevRegister = clock.register;

		switch (command) {
			case "noop":
				clock.cycle++;
				solution.crtOutput += getCrtOutput(clock);
				break;
			case "addx":
				clock.cycle++;
				solution.crtOutput += getCrtOutput(clock);
				clock.cycle++;
				solution.crtOutput += getCrtOutput(clock);
				clock.register += Number(num);
				break;
		}

		if (clock.cycle >= clock.target) {
			solution.strength += clock.target * prevRegister;
			clock.target += 40;
		}
	}

	return solution;
};
