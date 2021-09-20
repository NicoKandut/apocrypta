export interface ICipher {
  name: string;
  /**
   * Required to distinguish multiple ciphers of the same type
   */
  id: number;
  settings?: Record<string, boolean | number | string>;
  encode(text: string): string;
  decode(text: string): string;
}
