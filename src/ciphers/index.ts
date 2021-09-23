import { Base64 } from "./Base64";
import { Clear } from "./Clear";
import { Shift } from "./Shift";

/**
 * List of all ciphers
 * If you add a cipher, also add it to this list.
 */
export type AnyCipher = Clear | Base64 | Shift;

export const cipherTypes = ["clear", "base64", "shift"] as const;
export type CipherName = typeof cipherTypes[number];
export const cipherByName = {
  clear: () => new Clear(),
  base64: () => new Base64(),
  shift: () => new Shift(),
} as const;
