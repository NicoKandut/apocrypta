import { generateId } from "../../utils/idGenerator"
import { CipherDirection } from "./CipherDirection"
import { ICipher } from "./ICipher"
/**
 * Blueprint for ciphers.
 * If you want to add a new cipher, extend this class.
 */
export abstract class AbstractCipher implements ICipher {
  abstract readonly name: string
  /**
   * A cipher's {@link id} is important for distinguishing between multiple ciphers of the same kind
   */
  readonly id: number

  /**
   * By default ciphers encrypt from left to right and decrypt from right to left.
   * This behaviour can be switched.
   */
  direction: CipherDirection = "encode"

  /**
   * Default constructor that takes care of generating the {@link id}
   */
  constructor(id?: number) {
    this.id = id || generateId()
  }

  /**
   * Takes any string and applies the cipher's encoding to it.
   */
  abstract encode(text: string): string

  /**
   * Takes any string and removes the cipher's encoding from it.
   */
  abstract decode(text: string): string
}
