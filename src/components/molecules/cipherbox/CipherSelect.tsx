import { ChangeEventHandler, useCallback } from "react"
import { CipherName, cipherNames } from "../../../ciphers"

import "./CipherSelect.css"

type Props = {
  value: string
  onChange: (newValue: CipherName) => void
}

export default function CipherSelect({ value, onChange }: Props) {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => onChange(event.target.value as CipherName),
    [onChange]
  )

  return (
    <select className="cipherbox-select" value={value} onChange={handleChange}>
      {cipherNames.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  )
}
