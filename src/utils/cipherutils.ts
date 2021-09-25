import { IConfigurable } from "../ciphers/types/IConfigurable"

export const isConfigurable = (object: unknown): object is IConfigurable =>
  "settings" in (object as IConfigurable)
