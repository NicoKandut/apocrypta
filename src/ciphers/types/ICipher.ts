export interface ICipher {
  /**
   * Required to distinguish multiple ciphers of the same type
   */
  readonly id: number
  readonly name: string
  encode(text: string): string
  decode(text: string): string
}
