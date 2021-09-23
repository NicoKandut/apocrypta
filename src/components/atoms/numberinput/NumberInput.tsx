import { ChangeEventHandler, useCallback } from "react"
import "./NumberInput.css"

type Props = {
  title: string
  value: number
  onChange: (vnewValue: number) => void
}

export default function NumberInput({ title, value, onChange }: Props) {
  const onChangeWrapper: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      onChange(Number(event.target.value))
    },
    [onChange]
  )

  return (
    <div className="input input-number">
      <label className="input-title">{title}</label>
      <input
        className="input-field"
        type="number"
        value={value}
        onChange={onChangeWrapper}
      />
    </div>
  )
}
