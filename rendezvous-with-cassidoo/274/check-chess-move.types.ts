import type { Utils } from "../../types/utils.types.js";

export const BLACK_PIECES = ["p", "r", "b", "n", "q", "k"] as const;
export type TBlackPiece = (typeof BLACK_PIECES)[number];

export const WHITE_PIECES = ["P", "R", "B", "N", "Q", "K"] as const;
export type TWhitePiece = (typeof WHITE_PIECES)[number];

export const PIECES = [...BLACK_PIECES, ...WHITE_PIECES] as const;
export type TPiece = (typeof PIECES)[number];

export const SQUARE = [...PIECES, "~"] as const;
export type TSquare = (typeof SQUARE)[number];

export const COORDS = [0, 1, 2, 3, 4, 5, 6, 7] as const;

export type TCoord = (typeof COORDS)[number];

export type TPosition = [TCoord, TCoord];

export type TIsValidMoveArgs = {
	board: string;
	from: TPosition;
	to: TPosition;
};

type TRow = Utils.tuple<8, TPiece | "~">;
export type TBoard = Utils.tuple<8, TRow>;

export const CHESS_ERRORS = {
	badBishop: "the bishop can only move diagonally",
	badColumns: "board must have 8 columns",
	badKing: "the king can only move one space at a time",
	badKnight: "the knight can only move in a L shape",
	badPawn:
		"pawn can only move forward by one (or two at the start), or take another",
	badQueen: "the queen can only move horizontally, vertically, or diagonally",
	badRook: "the rook can only move horizontally or vertically",
	badRows: "board must have 8 rows",
	badSquare: "each square must be a chess piece or an empty space",
	collision: "the move can not be completed because a piece is in the way",
	emptySpace: "no piece exists in the starting spot",
	noMove: "a move must change the position of a piece",
} as const;

export type TChessError = (typeof CHESS_ERRORS)[keyof typeof CHESS_ERRORS];

type TAgnosticChessResponse = {
	isValid: boolean;
};

type TErrorChessResponse = {
	isValid: false;
	error: TChessError;
} & TAgnosticChessResponse;

type TValidChessResponse = {
	isValid: true;
	isKill: boolean;
	path: TPosition[];
} & TAgnosticChessResponse;

export type TChessResponse = TErrorChessResponse | TValidChessResponse;
