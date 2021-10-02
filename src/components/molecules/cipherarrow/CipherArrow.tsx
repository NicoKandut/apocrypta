import { useState } from "react"
import { Draggable } from "react-beautiful-dnd"
import { createPortal } from "react-dom"
import { CipherName, cipherNames } from "../../../ciphers"
import { CipherDirection as Direction } from "../../../ciphers/types/CipherDirection"
import { IConfigurable } from "../../../ciphers/types/IConfigurable"
import { SerializedCipher } from "../../../ciphers/types/SerializedCipher"
import close from "../../../icons/close.svg"
import settings from "../../../icons/settings.svg"
import { isConfigurable } from "../../../utils/cipherutils"
import ImageButton from "../../atoms/button/ImageButton"
import CipherDirection from "../../atoms/cipherdirection/CipherDirection"
import Modal from "../../atoms/modal/Modal"
import Select from "../../atoms/select/Select"
import EditView, {
  CipherSettingValue,
  getInputByKeyAndValue,
} from "../valuebox/EditView"
import "./CipherArrow.css"

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
  const [isEditMode, setEditMode] = useState(false)

  const singleSetting =
    isConfigurable(cipher) && Object.keys(cipher.settings).length === 1

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
            {isConfigurable(cipher) && !singleSetting && (
              <ImageButton
                icon={settings}
                onClick={() => setEditMode(true)}
                title="Settings"
              />
            )}
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
              {isConfigurable(cipher) &&
                singleSetting &&
                getInputByKeyAndValue(
                  ...Object.entries(cipher.settings)[0],
                  onSettingChange
                )}
            </div>
          </div>
          {isEditMode &&
            createPortal(
              <Modal title="Settings" onClose={() => setEditMode(false)}>
                <EditView
                  cipher={cipher as IConfigurable}
                  onSettingChange={onSettingChange}
                />
              </Modal>,
              document.getElementById("modal-root") as HTMLElement
            )}
        </div>
      )}
    </Draggable>
  )
}
