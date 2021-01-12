import { B62_CHARS } from "./62";
import { defBase } from "./base";

export const B64_CHARS = B62_CHARS + "+/";

/**
 * Digits: 0-9 A-Z a-z + /
 *
 * @remarks
 * Reference: https://en.wikipedia.org/wiki/Base64
 */
export const BASE64 = defBase(B64_CHARS);
