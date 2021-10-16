import { AbstractCipher } from "../types/AbstractCipher"
import { IConfigurable } from "../types/IConfigurable"
import { alphabet, alphabetUppercase } from "../utils/alphabet"
import { createRotation } from "../utils/rotation"

const alphabets = [alphabet, alphabetUppercase]

export class Shift extends AbstractCipher implements IConfigurable {
  readonly name = "Shift"

  settings = { value: 1 }

  encode(text: string): string {
    const shift = createRotation(this.settings.value, alphabets)
    return text.split("").map(shift).join("")
  }

  decode(text: string): string {
    const shift = createRotation(this.settings.value * -1, alphabets)
    return text.split("").map(shift).join("")
  }
}
