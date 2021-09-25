import { useCallback, useEffect, useState } from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"

import "./App.css"
import { CipherInstance, createCipher } from "./ciphers"
import { Clear } from "./ciphers/cipherlib/Clear"
import { Shift } from "./ciphers/cipherlib/Shift"
import { CipherBox } from "./components/molecules/cipherbox/Cipherbox"
import Footer from "./components/molecules/footer/Footer"
import Header from "./components/molecules/header/Header"
import { moveCipher } from "./utils/cipherlistUtils"
import { isConfigurable } from "./utils/cipherutils"

// Initial app setup
const initialCiphers = [new Clear(), new Shift()] as const
const initialValues = initialCiphers.map(() => "")
initialCiphers[1].settings.value = 3

export const App = () => {
  const [ciphers, setCiphers] = useState<CipherInstance[]>([...initialCiphers])
  const [values, setValues] = useState<string[]>(initialValues)

  const updateValues = useCallback(
    (value: string, index: number) => {
      const newValues = [...values]
      newValues[index] = value
      for (let i = index; i > 0; i--) {
        newValues[i - 1] = ciphers[i].decode(newValues[i])
      }
      for (let i = index; i < ciphers.length - 1; i++) {
        newValues[i + 1] = ciphers[i + 1].encode(newValues[i])
      }

      setValues(newValues)
    },
    [ciphers, values]
  )

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return
      }

      if (result.destination.index === result.source.index) {
        return
      }

      const newCiphers = moveCipher(
        ciphers,
        result.source.index,
        result.destination.index
      )

      setCiphers(newCiphers)
    },
    [ciphers]
  )

  useEffect(() => {
    updateValues("Experience is the teacher of all things.", 0)
  }, [])

  return (
    <div className="app dark">
      <Header />
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
                      const newCiphers = [...ciphers]
                      const newCipher = createCipher(value)
                      newCiphers.splice(i, 1, newCipher)
                      setCiphers(newCiphers)
                    }}
                    onTextChange={(value) => updateValues(value, i)}
                    onSettingChange={(key, value) => {
                      const newCiphers = [...ciphers]
                      const cipher = newCiphers[i]
                      if (isConfigurable(cipher)) {
                        //@ts-expect-error This can never be invalid but i gotta find a good way to express this in code
                        cipher.settings[key] = value
                      }
                      newCiphers.splice(i, 1, cipher)
                      setCiphers(newCiphers)
                    }}
                    onClose={() => {
                      const newCiphers = [...ciphers]
                      newCiphers.splice(i, 1)
                      setCiphers(newCiphers)
                    }}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <button
          className="btn-add"
          onClick={() => setCiphers([...ciphers, new Clear()])}
        >
          +
        </button>
      </main>
      <Footer />
    </div>
  )
}
