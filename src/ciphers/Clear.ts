import { generateId } from "../utils/idGenerator";
import { ICipher } from "./ICipher";

export class Clear implements ICipher {
  name = "clear";
  id: number;

  constructor() {
    this.id = generateId();
  }

  encode(text: string): string {
    return text;
  }

  decode(text: string): string {
    return text;
  }
}
