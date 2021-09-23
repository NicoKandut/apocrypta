export interface ICipher {
  readonly name: string;
  /**
   * Required to distinguish multiple ciphers of the same type
   */
  readonly id: number;
  encode(text: string): string;
  decode(text: string): string;
}
