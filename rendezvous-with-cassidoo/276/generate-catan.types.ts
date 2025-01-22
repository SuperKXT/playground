import type { Utils } from "../../types/utils.types.js";

export const SINGLE_PIECES = [".", "2", "C"] as const;

export const DOUBLE_PIECES = ["3", "4", "5", "6", "8", "9", "A", "B"] as const;

export type TCell =
	| (typeof DOUBLE_PIECES)[number]
	| (typeof SINGLE_PIECES)[number];

export type TBoard = [
	Utils.tuple<3, TCell>,
	Utils.tuple<4, TCell>,
	Utils.tuple<5, TCell>,
	Utils.tuple<4, TCell>,
	Utils.tuple<3, TCell>,
];

export type TProspectiveBoard = [
	Utils.tuple<3, TCell | "">,
	Utils.tuple<4, TCell | "">,
	Utils.tuple<5, TCell | "">,
	Utils.tuple<4, TCell | "">,
	Utils.tuple<3, TCell | "">,
];

const ROW_PIECES = [3, 4, 5, 4, 3] as const;

const PIECE_REGEX = /[0-9ABC.]/u;

export const BOARD_REGEX = new RegExp(
	Array.from({ length: 5 }, (_, index) => {
		const pieces = ROW_PIECES[index] as number;
		return ` {${5 - pieces}}(${PIECE_REGEX.source} ?){${pieces}}`;
	}).join("\n"),
	"u",
);

export const CATAN_ERRORS = {
	badFormatting: "The board is not properly formatted",
	badPieceCount:
		"Board must have two each of 3, 4, 5, 6, 8, 9, 10, 11, and one each of 2, 12, and .",
	badPositioning: "6 and 8 cells can not touch each other",
} as const;

export type TCatanError = (typeof CATAN_ERRORS)[keyof typeof CATAN_ERRORS];
