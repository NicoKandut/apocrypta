import { ChangeEventHandler, useCallback, useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { ICipher } from "../../../ciphers/interfaces/ICipher"
import close from "../../../icons/close.svg"
import done from "../../../icons/done.svg"
import settings from "../../../icons/settings.svg"
import { isConfigurable } from "../../../utils/cipherutils"
import ImageButton from "../../atoms/button/ImageButton"
import "./Cipherbox.css"
import CipherSelect from "./CipherSelect"
import EditView, { CipherSettingValue } from "./EditView"

type Props = {
  cipher: ICipher
  value: string
  onTypeChange: (newValue: string) => void
  onTextChange: (newValue: string) => void
  onSettingChange: (key: string, value: CipherSettingValue) => void
  onClose: () => void
  index: number
}

export const CipherBox = ({
  cipher,
  value,
  onTextChange,
  index,
  onClose,
  onTypeChange,
  onSettingChange,
}: Props) => {
  const [isEditMode, setEditMode] = useState(false)

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => onTextChange(event.target.value),
    [onTextChange]
  )

  const hasSettings = isConfigurable(cipher)

  return (
    <Draggable draggableId={cipher.id.toString()} index={index}>
      {(provided) => (
        <div
          className="cipherbox"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="cipherbox-titlebar">
            <CipherSelect value={cipher.name} onChange={onTypeChange} />
            <div className="cipherbox-handle" />
            {hasSettings &&
              (isEditMode ? (
                <ImageButton
                  icon={done}
                  onClick={() => setEditMode(false)}
                  title="Done"
                />
              ) : (
                <ImageButton
                  icon={settings}
                  onClick={() => setEditMode(true)}
                  title="Settings"
                />
              ))}
            <ImageButton
              icon={close}
              onClick={onClose}
              title="Remove this cipher"
            />
          </div>
          {hasSettings && isEditMode ? (
            <EditView cipher={cipher} onSettingChange={onSettingChange} />
          ) : (
            <textarea
              className="cipherbox-content"
              value={value}
              onChange={handleChange}
            />
          )}
        </div>
      )}
    </Draggable>
  )
}
