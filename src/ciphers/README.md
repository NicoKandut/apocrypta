# Ciphers

## Adding ciphers

Adding ciphers is really easy. Have a look at `Clear` (which is the most basic cipher) and `Base64` (which uses `Clear` as its superclass).

If you want to add a new cipher just make it extend `Clear` and override the `encode` and `decode` methods.

### Example for a simple cipher

```ts
import { Clear } from "./Clear"

/**
 *  Wraps text in <>
 */
export class MyCipher extends Clear {
  encode(text: string): string {
    return `<${text}>`
  }

  decode(text: string): string {
    return text.substr(1, text.length - 2)
  }
}
```

If you want to make your cipher configurable you need to implement `IConfigurable` as well. For an example, have a look at the `Shift` cipher.

### Example for a configurable cipher

```ts
import { Clear } from "./Clear";

/**
 *  Wraps text in configurable strings
 */
export class MyCipher extends Clear, IConfigurable {
  settings: { prefix: string = "<"; suffix: string = ">" };

  encode(text: string): string {
    return `${settings.prefix}${text}${settings.suffix}`;
  }

  decode(text: string): string {
    return text.substr(1, text.length - 2);
  }
}
```
