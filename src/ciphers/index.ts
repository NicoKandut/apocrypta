import { isConfigurable } from "../utils/cipherutils"
import { Base64 } from "./cipherlib/Base64"
import { Clear } from "./cipherlib/Clear"
import { Shift } from "./cipherlib/Shift"
import { Vigenere } from "./cipherlib/Vigenere"
import { SerializedCipher } from "./types/SerializedCipher"

/**
 * Assigns simple names to all ciphers
 * If you add a cipher, also add it to this list.
 */
const cipherMap = {
  [new Clear().name]: Clear,
  [new Base64().name]: Base64,
  [new Shift().name]: Shift,
  [new Vigenere().name]: Vigenere,
} as const

export type CipherName = keyof typeof cipherMap
export type CipherClass = typeof cipherMap[CipherName]
export type CipherInstance = InstanceType<CipherClass>

export const cipherNames = Object.freeze(Object.keys(cipherMap)) as CipherName[]

export const createCipher = (name: CipherName, id?: number) =>
  new cipherMap[name](id)

export const serializeCipher = (cipher: CipherInstance): SerializedCipher => {
  return {
    name: cipher.name,
    id: cipher.id,
    direction: cipher.direction,
    ...(isConfigurable(cipher) ? { settings: cipher.settings } : {}),
  }
}
export const deserializeCipher = (cipher: SerializedCipher): CipherInstance => {
  const result = createCipher(cipher.name, cipher.id)

  result.direction = cipher.direction
  if (isConfigurable(result) && isConfigurable(cipher)) {
    //@ts-expect-error
    result.settings = cipher.settings
  }

  return result
}
