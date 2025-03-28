import { expect, test } from "vitest";

import { isValidMove } from "./check-chess-move.js";
import { CHESS_ERRORS } from "./check-chess-move.types.js";

import type {
	TChessResponse,
	TIsValidMoveArgs,
} from "./check-chess-move.types.js";

type TTest = {
	input: TIsValidMoveArgs;
	response: TChessResponse;
};

const BOARD = [
	"~~~~~~~~",
	"~~kb~~~~",
	"~~K~~~~~",
	"~~~~~~~~",
	"~~~~~~~~",
	"~~~~~~~~",
	"~~~~~~~~",
	"~~~R~~~~",
].join("\n");

const TESTS: TTest[] = [
	{
		input: {
			board: BOARD,
			from: [7, 3],
			to: [0, 0],
		},
		response: {
			error: CHESS_ERRORS.badRook,
			isValid: false,
		},
	},
	{
		input: {
			board: BOARD,
			from: [1, 2],
			to: [0, 1],
		},
		response: {
			isKill: false,
			isValid: true,
			path: [
				[1, 2],
				[0, 1],
			],
		},
	},
	{
		input: {
			board: BOARD,
			from: [1, 2],
			to: [1, 3],
		},
		response: {
			error: CHESS_ERRORS.collision,
			isValid: false,
		},
	},
];
test.each(TESTS)("testing isValidMove", ({ input, response }) => {
	expect(isValidMove(input)).toStrictEqual(response);
});
