import { generateId } from "../utils/idGenerator"
import { ICipher } from "./interfaces/ICipher"

/**
 * Not really a cipher.
 * Both {@link encode} and `{@link decode} both return the input string without modifying it.
 *
 * This cipher implements all required id behaviour. Therefore, it is recommended to extend {@link Clear} instead of implementing {@link ICipher}
 */
export class Clear implements ICipher {
  name = "clear"
  readonly id: number

  constructor() {
    this.id = generateId()
  }

  encode(text: string): string {
    return text
  }

  decode(text: string): string {
    return text
  }
}
