import { Clear } from "./Clear";

export class Base64 extends Clear {
  name = "base64";

  encode(text: string): string {
    return Buffer.from(text).toString("base64");
  }

  decode(text: string): string {
    return Buffer.from(text, "base64").toString();
  }
}
