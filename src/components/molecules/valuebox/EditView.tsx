import { IConfigurable } from "../../../ciphers/types/IConfigurable"
import NumberInput from "../../atoms/numberinput/NumberInput"
import "./EditView.css"

export type CipherSettingValue = Exclude<
  IConfigurable["settings"],
  undefined
>[string]

type Props = {
  cipher: IConfigurable // settings must be defined
  onSettingChange: (key: string, value: CipherSettingValue) => void
}

export const getInputByKeyAndValue = (
  key: string,
  value: CipherSettingValue,
  onChange: (key: string, newValue: CipherSettingValue) => void,
  labelled: boolean = false
) => {
  switch (typeof value) {
    case "number":
      return (
        <NumberInput
          key={key}
          title={key}
          value={value}
          onChange={(newValue) => onChange(key, newValue)}
          labelled={labelled}
        />
      )
    default:
      return null
  }
}

export default function EditView({ cipher, onSettingChange }: Props) {
  return (
    <>
      {Object.entries(cipher.settings).map(([key, value]) =>
        getInputByKeyAndValue(key, value, onSettingChange)
      )}
    </>
  )
}
