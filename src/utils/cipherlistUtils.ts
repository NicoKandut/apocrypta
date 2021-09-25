import { CipherInstance } from "../ciphers"

/**
 * Moves a cipher in a list of ciphers
 * @param ciphers list of ciphers
 * @param from 0 based index
 * @param to 0 based index
 * @returns a new list
 */
export const moveCipher = (
  ciphers: CipherInstance[],
  from: number,
  to: number
) => {
  const result = [...ciphers]
  const [removed] = result.splice(from, 1)
  result.splice(to, 0, removed)

  return result
}
