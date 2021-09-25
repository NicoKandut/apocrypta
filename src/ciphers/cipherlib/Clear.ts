import { AbstractCipher } from "../types/AbstractCipher"

/**
 * Not really a cipher.
 * Both {@link encode} and `{@link decode} both return the input string without modifying it.
 */
export class Clear extends AbstractCipher {
  readonly name = "Clear"

  encode(text: string): string {
    return text
  }

  decode(text: string): string {
    return text
  }
}
