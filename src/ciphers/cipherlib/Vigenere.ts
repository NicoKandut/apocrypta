import { AbstractCipher } from "../types/AbstractCipher"
import { IConfigurable } from "../types/IConfigurable"
import { alphabet, alphabetUppercase } from "../utils/alphabet"
import { createRotations } from "../utils/rotation"

const alphabets = [alphabet, alphabetUppercase]

export class Vigenere extends AbstractCipher implements IConfigurable {
  readonly name = "Vignere"
  settings = {
    value: "abc",
  }

  encode(text: string): string {
    const rotationValues = this.settings.value.split("").map((letter) => {
      const letterIndex = alphabets
        .find((a) => a.includes(letter))
        ?.indexOf(letter)

      return (letterIndex === undefined ? 0 : letterIndex) + 1
    })

    const rotations = createRotations(rotationValues, alphabets)

    return text
      .split("")
      .map((letter, i) => rotations[i % rotations.length](letter))
      .join("")
  }
  decode(text: string): string {
    const rotationValues = this.settings.value.split("").map((letter) => {
      const letterIndex = alphabets
        .find((a) => a.includes(letter))
        ?.indexOf(letter)

      return ((letterIndex === undefined ? 0 : letterIndex) + 1) * -1
    })
    const rotations = createRotations(rotationValues, alphabets)

    return text
      .split("")
      .map((letter, i) => rotations[i % rotations.length](letter))
      .join("")
  }
}
