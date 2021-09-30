import { CipherName } from ".."
import { CipherDirection } from "./CipherDirection"
import { Settings } from "./Settings"

export interface SerializedCipher {
  name: CipherName
  id: number
  direction: CipherDirection
  settings?: Settings
}
