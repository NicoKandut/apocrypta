import { ChangeEventHandler, useCallback } from "react"
import "./Select.css"

type Props = {
  value: string
  values: string[]
  onChange: (newValue: string) => void
}

export default function Select({ value, values, onChange }: Props) {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = useCallback(
    (event) => onChange(event.target.value),
    [onChange]
  )

  return (
    <select className="select" value={value} onChange={handleChange}>
      {values.map((v) => (
        <option key={v} value={v}>
          {v}
        </option>
      ))}
    </select>
  )
}
