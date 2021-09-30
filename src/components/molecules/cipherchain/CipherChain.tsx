import { useCallback } from "react"
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd"
import { useDispatch } from "react-redux"
import { serializeCipher } from "../../../ciphers"
import { Clear } from "../../../ciphers/cipherlib/Clear"
import {
  addCipher,
  CalculationsState,
  moveCipher,
  removeCipher,
  setCipherDirection,
  setCipherName,
  setCipherSettings,
} from "../../../state/calculations/calculationsSlice"
import CipherArrow from "../cipherarrow/CipherArrow"
import { Valuebox } from "../valuebox/Valuebox"
import "./CipherChain.css"

type Props = {
  calculation: CalculationsState["calculations"][number]
  calculationIndex: number
}

export default function CipherChain({ calculation, calculationIndex }: Props) {
  const dispatch = useDispatch()

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (
        // Drop in invalid position
        !result.destination ||
        // Drop on the same spot
        result.destination.index === result.source.index
      ) {
        return
      }

      dispatch(
        moveCipher({
          calculationIndex,
          fromIndex: result.source.index,
          toIndex: result.destination.index,
        })
      )
    },
    [calculationIndex, dispatch]
  )

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="cipherlist" direction="horizontal">
          {(provided) => (
            <div
              className="cipherbox-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {calculation.ciphers.map((c, i) => (
                <CipherArrow
                  index={i}
                  key={c.id}
                  cipher={c}
                  onNameChange={(newName) =>
                    dispatch(
                      setCipherName({
                        calculationIndex,
                        cipherIndex: i,
                        name: newName,
                      })
                    )
                  }
                  onSettingChange={(key, value) =>
                    dispatch(
                      setCipherSettings({
                        calculationIndex,
                        cipherIndex: i,
                        settings: { [key]: value },
                      })
                    )
                  }
                  onClose={() =>
                    dispatch(
                      removeCipher({
                        calculationIndex,
                        cipherIndex: i,
                      })
                    )
                  }
                  onDirectionChange={(newDirection) =>
                    dispatch(
                      setCipherDirection({
                        calculationIndex,
                        cipherIndex: i,
                        direction: newDirection,
                      })
                    )
                  }
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <button
        className="btn-addcipher"
        onClick={() =>
          dispatch(
            addCipher({
              calculationIndex,
              cipher: serializeCipher(new Clear()),
            })
          )
        }
      >
        +
      </button>
      <Valuebox value={calculation.result} onValueChange={() => {}} />
    </>
  )
}
