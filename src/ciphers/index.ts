import { Base64 } from "./cipherlib/Base64"
import { Clear } from "./cipherlib/Clear"
import { Shift } from "./cipherlib/Shift"

/**
 * Assigns simple names to all ciphers
 * If you add a cipher, also add it to this list.
 */
const cipherMap = {
  [new Clear().name]: Clear,
  [new Base64().name]: Base64,
  [new Shift().name]: Shift,
} as const

export type CipherName = keyof typeof cipherMap
export type CipherClass = typeof cipherMap[CipherName]
export type CipherInstance = InstanceType<CipherClass>

export const cipherNames = Object.freeze(Object.keys(cipherMap)) as CipherName[]
export const createCipher = (name: CipherName) => new cipherMap[name]()
