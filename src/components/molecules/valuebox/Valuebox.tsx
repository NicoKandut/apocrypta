import { ChangeEventHandler, useCallback } from "react"
import "./Valuebox.css"

type Props = {
  value: string
  onValueChange: (newValue: string) => void
}

export const Valuebox = ({ value, onValueChange }: Props) => {
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => onValueChange(event.target.value),
    [onValueChange]
  )

  return (
    <div className="cipherbox">
      <div className="cipherbox-titlebar">
        <div className="cipherbox-handle" />
      </div>

      <textarea
        className="cipherbox-content"
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
