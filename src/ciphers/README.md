# Ciphers

## Adding ciphers

Adding ciphers is really easy. Have a look at `Clear` (which is the most basic cipher) and `Base64` (which uses `Clear` as its superclass).

If you want to add a new cipher just make it extend `AbstractCipher`, give it a name and override the `encode` and `decode` methods.

### Example for a simple cipher

```ts
// src/ciphers/cipherlib/MyCipher.ts
import { AbstractCipher } from "./AbstractCipher"

/**
 *  Wraps text in <>
 */
export class MyCipher extends AbstractCipher {
  readonly name = "MyCipher"

  encode(text: string): string {
    return `<${text}>`
  }

  decode(text: string): string {
    return text.substr(1, text.length - 2)
  }
}
```

Finally, you need to register it so the app knows about it and can offer it to the user.

```ts
// src/ciphers/index.ts
...
/**
 * Assigns simple names to all ciphers
 * If you add a cipher, also add it to this list.
 */
const cipherMap = {
  ...
  [new MyCipher().name]: MyCipher,
  ...,
} as const
...
```

If you want to make your cipher configurable you need to implement `IConfigurable` as well. For an example, have a look at the `Shift` cipher.

### Example for a configurable cipher

```ts
import { AbstractCipher } from "./AbstractCipher";

/**
 *  Wraps text in configurable strings
 */
export class MyCipher extends AbstractCipher, IConfigurable {
  readonly name = "MyCipher"

  settings: { prefix: string = "<"; suffix: string = ">" };

  encode(text: string): string {
    return `${settings.prefix}${text}${settings.suffix}`;
  }

  decode(text: string): string {
    return text.substr(1, text.length - 2);
  }
}
```
