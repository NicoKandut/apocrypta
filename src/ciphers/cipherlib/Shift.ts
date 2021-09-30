import { AbstractCipher } from "../types/AbstractCipher"
import { IConfigurable } from "../types/IConfigurable"
import { alphabet, alphabetUppercase, indexOfLetter } from "../utils/alphabet"

const modularValue = (value: number, size: number) => (value + size) % size
const createShift = (value: number) => (letter: string) =>
  letter in indexOfLetter
    ? alphabet[
        modularValue(
          indexOfLetter[letter as typeof alphabet[number]] + value,
          alphabet.length
        )
      ]
    : letter.toLowerCase() in indexOfLetter
    ? alphabetUppercase[
        modularValue(
          indexOfLetter[letter.toLowerCase() as typeof alphabet[number]] +
            value,
          alphabetUppercase.length
        )
      ]
    : letter

export class Shift extends AbstractCipher implements IConfigurable {
  readonly name = "Shift"

  settings = { value: 1 }

  encode(text: string): string {
    const shift = createShift(this.settings.value)
    return text.split("").map(shift).join("")
  }

  decode(text: string): string {
    const shift = createShift(this.settings.value * -1)
    return text.split("").map(shift).join("")
  }
}
