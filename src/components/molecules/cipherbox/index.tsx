import { ChangeEventHandler, useCallback, useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { ICipher } from "../../../ciphers/ICipher";
import "./CipherBox.css";
import CipherSelect from "./CipherSelect";
import close from "../../../icons/close.svg";
import done from "../../../icons/done.svg";
import settings from "../../../icons/settings.svg";

type CipherSettingValue = Exclude<ICipher["settings"], undefined>[string];

type Props = {
  cipher: ICipher;
  value: string;
  onTypeChange: (newValue: string) => void;
  onTextChange: (newValue: string) => void;
  onSettingChange: (key: string, value: CipherSettingValue) => void;
  onClose: () => void;
  index: number;
};

const getInput = (
  key: string,
  value: CipherSettingValue,
  onChange: (key: string, newValue: CipherSettingValue) => void
) => {
  switch (typeof value) {
    case "number":
      return (
        <input
          type="number"
          value={value}
          onChange={(event) => onChange(key, Number(event.target.value))}
        />
      );
    default:
      return null;
  }
};

export const CipherBox = ({
  cipher,
  value,
  onTextChange,
  index,
  onClose,
  onTypeChange,
  onSettingChange,
}: Props) => {
  const [isEditMode, setEditMode] = useState(false);

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback(
    (event) => onTextChange(event.target.value),
    [onTextChange]
  );

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
            {cipher.settings && (
              <button
                className="cipherbox-button"
                onClick={() => setEditMode(!isEditMode)}
              >
                {isEditMode ? (
                  <img src={done} alt="Done" />
                ) : (
                  <img src={settings} alt="Settings" />
                )}
              </button>
            )}
            <button className="cipherbox-button" onClick={onClose}>
              <img src={close} alt="Close"></img>
            </button>
          </div>
          {isEditMode && cipher.settings ? (
            <div className="cipherbox-settings">
              {Object.entries(cipher.settings).map(([key, value]) => {
                return (
                  <>
                    <label>{key}</label>
                    {getInput(key, value, onSettingChange)}
                  </>
                );
              })}
            </div>
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
  );
};
