import type { Utils } from "../types/utils.types.js";

export const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
export type TLowerAlphabet = Utils.stringToUnion<typeof lowerAlphabet>;

export const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
export type TUpperAlphabet = Utils.stringToUnion<typeof upperAlphabet>;

export const numeric = "0123456789";
export type TNumeric = Utils.stringToUnion<typeof numeric>;

export const alphabet = `${lowerAlphabet}${upperAlphabet}`;
export type TAlphabet = TLowerAlphabet | TUpperAlphabet;

export const wordSeparators = ` \n-_.${numeric}`;
export type TWordSeparators = Utils.stringToUnion<typeof wordSeparators>;

export const alphaNumeric = `${alphabet}${numeric}`;
export type TAlphaNumeric = TAlphabet | TNumeric;
