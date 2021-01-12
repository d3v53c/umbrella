import { B36_CHARS } from "./36";
import { defBase } from "./base";

export const B62_CHARS = B36_CHARS + "abcdefghijklmnopqrstuvwxyz";

/**
 * Digits: 0-9 A-Z a-z
 *
 * @remarks
 * Reference: https://en.wikipedia.org/wiki/Base62
 */
export const BASE62 = defBase(B62_CHARS);
