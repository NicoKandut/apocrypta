import { AbstractCipher } from "../types/AbstractCipher"
import { IConfigurable } from "../types/IConfigurable"
import { alphabet, indexOfLetter } from "../utils/alphabet"

const modularValue = (value: number, size: number) => (value + size) % size
const createShift = (value: number) => (c: string) =>
  c in indexOfLetter
    ? alphabet[
        modularValue(
          indexOfLetter[c as typeof alphabet[number]] + value,
          alphabet.length
        )
      ]
    : c

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
