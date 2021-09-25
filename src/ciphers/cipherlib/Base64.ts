import { AbstractCipher } from "../types/AbstractCipher"

export class Base64 extends AbstractCipher {
  readonly name = "Base64"

  encode(text: string): string {
    return Buffer.from(text).toString("base64")
  }

  decode(text: string): string {
    return Buffer.from(text, "base64").toString()
  }
}
