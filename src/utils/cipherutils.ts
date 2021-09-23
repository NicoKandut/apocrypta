import { IConfigurable } from "../ciphers/interfaces/IConfigurable"

export const isConfigurable = (object: unknown): object is IConfigurable =>
  "settings" in (object as IConfigurable)
