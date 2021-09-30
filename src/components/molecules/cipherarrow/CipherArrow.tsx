import { Draggable } from "react-beautiful-dnd"
import { CipherName, cipherNames } from "../../../ciphers"
import { CipherDirection as Direction } from "../../../ciphers/types/CipherDirection"
import { SerializedCipher } from "../../../ciphers/types/SerializedCipher"
import ImageButton from "../../atoms/button/ImageButton"
import { CipherSettingValue } from "../valuebox/EditView"
import "./CipherArrow.css"

import close from "../../../icons/close.svg"
import CipherDirection from "../../atoms/cipherdirection/CipherDirection"
import Select from "../../atoms/select/Select"

type Props = {
  cipher: SerializedCipher
  index: number
  onNameChange: (newName: CipherName) => void
  onDirectionChange: (newDirection: Direction) => void
  onSettingChange: (key: string, value: CipherSettingValue) => void
  onClose: () => void
}

export default function CipherArrow({
  cipher,
  onNameChange,
  onDirectionChange,
  onSettingChange,
  onClose,
  index,
}: Props) {
  return (
    <Draggable draggableId={cipher.id.toString()} index={index}>
      {(provided) => (
        <div
          className="cipherarrow"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="cipherarrow-iconlist">
            <ImageButton icon={close} onClick={onClose} title="Remove" />
          </div>
          <div className="cipherarrow-wrapper">
            <div className="cipherarrow-display">
              <CipherDirection
                direction={cipher.direction}
                onChange={onDirectionChange}
              />
              <Select
                value={cipher.name}
                values={cipherNames}
                onChange={(newName) => onNameChange(newName as CipherName)}
              />
            </div>
          </div>
        </div>
      )}
    </Draggable>
  )
}
