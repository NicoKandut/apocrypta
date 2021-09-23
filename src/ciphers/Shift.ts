import { Clear } from "./Clear"
import { IConfigurable } from "./interfaces/IConfigurable"

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
] as const

const lettersToIndex = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,
} as const

/**
 *
 * @param value
 * @param size
 * @returns
 */
const modularValue = (value: number, size: number) => (value + size) % size
const createShift = (value: number) => (c: string) =>
  c in lettersToIndex
    ? alphabet[
        modularValue(
          lettersToIndex[c as typeof alphabet[number]] + value,
          alphabet.length
        )
      ]
    : c

export class Shift extends Clear implements IConfigurable {
  name = "shift"
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
