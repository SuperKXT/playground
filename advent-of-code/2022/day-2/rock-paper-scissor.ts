import { readFile } from "node:fs/promises";
import path from "node:path";

import { z } from "zod";

import { config } from "../../../config.js";

const ARG_1_SCHEMA = z.enum(["a", "b", "c"]);
type TVersusMove = z.infer<typeof ARG_1_SCHEMA>;

const ARG_2_SCHEMA = z.enum(["x", "y", "z"]);
type TPlayerMove = z.infer<typeof ARG_2_SCHEMA>;

type TResult = z.infer<typeof ARG_2_SCHEMA>;

const MATCH_SCHEMA = z.tuple([ARG_1_SCHEMA, ARG_2_SCHEMA]);

const PLAYER_RULES = {
	x: {
		loses: "b",
		score: 1,
		wins: "c",
	},
	y: {
		loses: "c",
		score: 2,
		wins: "a",
	},
	z: {
		loses: "a",
		score: 3,
		wins: "b",
	},
} satisfies Record<
	TPlayerMove,
	{
		score: 1 | 2 | 3;
		wins: TVersusMove;
		loses: TVersusMove;
	}
>;

const VERSUS_RULES = {
	a: {
		draws: "x",
		loses: "y",
		wins: "z",
	},
	b: {
		draws: "y",
		loses: "z",
		wins: "x",
	},
	c: {
		draws: "z",
		loses: "x",
		wins: "y",
	},
} satisfies Record<
	TVersusMove,
	{
		wins: TPlayerMove;
		loses: TPlayerMove;
		draws: TPlayerMove;
	}
>;

const getPart1Score = (
	versusMove: TVersusMove,
	playerMove: TPlayerMove,
): number => {
	const { score, wins, loses } = PLAYER_RULES[playerMove];
	switch (versusMove) {
		case wins:
			return score + 6;
		case loses:
			return score + 0;
		default:
			return score + 3;
	}
};

const getPart2Score = (versusMove: TVersusMove, result: TResult): number => {
	const { wins, loses, draws } = VERSUS_RULES[versusMove];
	switch (result) {
		case "z":
			return PLAYER_RULES[loses].score + 6;
		case "x":
			return PLAYER_RULES[wins].score + 0;
		default:
			return PLAYER_RULES[draws].score + 3;
	}
};

export type TRockPaperScissorsSolution = {
	part1: number;
	part2: number;
};

export const rockPaperScissors =
	async (): Promise<TRockPaperScissorsSolution> => {
		const input = await readFile(
			path.join(config.dirname, "input.txt"),
			"utf-8",
		);

		const score = input
			.toLowerCase()
			.split("\n")
			.reduce(
				({ part1, part2 }, row) => {
					try {
						const [versus, playerOrResult] = MATCH_SCHEMA.parse(
							row.toLowerCase().split(" "),
						);
						return {
							part1: part1 + getPart1Score(versus, playerOrResult),
							part2: part2 + getPart2Score(versus, playerOrResult),
						};
					} catch {
						return { part1, part2 };
					}
				},
				{ part1: 0, part2: 0 },
			);

		return score;
	};
