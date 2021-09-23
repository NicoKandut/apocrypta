import { ChangeEventHandler, useCallback } from "react"
import { cipherTypes } from "../../../ciphers"
import "./CipherSelect.css"

type Props = {
  value: string
  onChange: (newValue: string) => void
}

export default function CipherSelect({ value, onChange }: Props) {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => onChange(event.target.value),
    [onChange]
  )

  return (
    <select className="cipherbox-select" value={value} onChange={handleChange}>
      {cipherTypes.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  )
}
