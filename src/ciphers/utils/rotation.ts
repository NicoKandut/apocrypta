/**
 * Easily get a circular index
 */
export const modularValue = (value: number, size: number) =>
  (value + size) % size

/**
 * Ceasar cipher like rotation that can handle multiple alphabets at once.
 * Useful for Upper/Lowercase etc.
 */
export const createRotation =
  (value: number, alphabets: readonly (readonly string[])[]) =>
  (letter: string) => {
    const alphabet = alphabets.find((a) => a.includes(letter))

    if (alphabet) {
      return alphabet[
        modularValue(alphabet.indexOf(letter) + value, alphabet.length)
      ]
    }

    return letter
  }

export const createRotations = (
  values: number[],
  alphabets: readonly (readonly string[])[]
) => {
  return values.map((value) => createRotation(value, alphabets))
}
