import { useCallback, useState } from "react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

import "./App.css";
import { Cipher, cipherByName, CipherName } from "./ciphers";
import { Base64 } from "./ciphers/Base64";
import { Clear } from "./ciphers/Clear";
import { ICipher } from "./ciphers/ICipher";
import { Shift } from "./ciphers/Shift";
import { CipherBox } from "./components/molecules/cipherbox";

const initialCiphers = [new Clear(), new Shift(), new Base64()];
const initialValues = initialCiphers.map(() => "");

const moveCipher = (ciphers: Cipher[], from: number, to: number) => {
  const result = [...ciphers];
  const [removed] = result.splice(from, 1);
  result.splice(to, 0, removed);

  return result;
};

export const App = () => {
  const [ciphers, setCiphers] = useState<ICipher[]>(initialCiphers);
  const [values, setValues] = useState<string[]>(initialValues);

  const updateValues = useCallback(
    (value: string, index: number) => {
      const newValues = [...values];
      newValues[index] = value;
      for (let i = index; i > 0; i--) {
        newValues[i - 1] = ciphers[i].decode(newValues[i]);
      }
      for (let i = index; i < ciphers.length - 1; i++) {
        newValues[i + 1] = ciphers[i + 1].encode(newValues[i]);
      }

      setValues(newValues);
    },
    [ciphers, values]
  );

  function onDragEnd(result: DropResult) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const newCiphers = moveCipher(
      ciphers,
      result.source.index,
      result.destination.index
    );

    setCiphers(newCiphers);
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>Apocrypta</h1>
      </header>
      <main className="cipherlist-container">
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="cipherlist" direction="horizontal">
            {(provided) => (
              <div
                className="cipherbox-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {ciphers.map((c, i) => (
                  <CipherBox
                    key={c.id}
                    index={i}
                    cipher={c}
                    value={values[i]}
                    onTypeChange={(value) => {
                      const newCiphers = [...ciphers];
                      const newCipher = cipherByName[value as CipherName]();
                      newCiphers.splice(i, 1, newCipher);
                      setCiphers(newCiphers);
                    }}
                    onTextChange={(value) => updateValues(value, i)}
                    onSettingChange={(key, value) => {
                      const newCiphers = [...ciphers];
                      const cipher = newCiphers[i];
                      if (cipher.settings) cipher.settings[key] = value;
                      newCiphers.splice(i, 1, cipher);
                      setCiphers(newCiphers);
                    }}
                    onClose={() => {
                      const newCiphers = [...ciphers];
                      newCiphers.splice(i, 1);
                      setCiphers(newCiphers);
                    }}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button onClick={() => setCiphers([...ciphers, new Clear()])}>+</button>
      </main>
      <footer>footer</footer>
    </div>
  );
};
