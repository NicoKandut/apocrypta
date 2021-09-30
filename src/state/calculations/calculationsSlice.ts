import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  CipherName,
  createCipher,
  deserializeCipher,
  serializeCipher,
} from "../../ciphers"
import { Base64 } from "../../ciphers/cipherlib/Base64"
import { Shift } from "../../ciphers/cipherlib/Shift"
import { CipherDirection } from "../../ciphers/types/CipherDirection"
import { SerializedCipher } from "../../ciphers/types/SerializedCipher"
import { Settings } from "../../ciphers/types/Settings"
import { isConfigurable } from "../../utils/cipherutils"

type Calculation = {
  ciphers: SerializedCipher[]
  result: string
}

export interface CalculationsState {
  rootValue: string
  calculations: Calculation[]
}

const decryptBase64 = new Base64()
decryptBase64.direction = "decode"

const decryptShift = new Shift()
decryptShift.direction = "decode"

const initialState: CalculationsState = {
  rootValue: "Experience is the teacher of all things.",
  calculations: [
    {
      ciphers: [serializeCipher(new Shift()), serializeCipher(new Base64())],
      result: "",
    },
    // {
    //   ciphers: [serializeCipher(decryptBase64), serializeCipher(decryptShift)],
    //   result: "",
    // },
  ],
}

export const calculationsSlice = createSlice({
  name: "calculations",
  initialState,
  reducers: {
    //#region Calculations
    addCalculation: (
      state,
      action: PayloadAction<{ ciphers: SerializedCipher[] }>
    ) => {
      state.calculations.push({
        ciphers: action.payload.ciphers,
        result: "",
      })
    },
    removeCalculation: (state, action: PayloadAction<{ index: number }>) => {
      state.calculations.splice(action.payload.index, 1)
    },
    moveCalculation: (
      state,
      action: PayloadAction<{ fromIndex: number; toIndex: number }>
    ) => {
      const [movingCalculation] = state.calculations.splice(
        action.payload.fromIndex,
        1
      )
      state.calculations.splice(action.payload.toIndex, 0, movingCalculation)
    },
    //#endregion

    //#region Ciphers
    addCipher(
      state,
      action: PayloadAction<{
        calculationIndex: number
        cipher: SerializedCipher
      }>
    ) {
      state.calculations[action.payload.calculationIndex].ciphers.push(
        action.payload.cipher
      )
    },
    removeCipher(
      state,
      action: PayloadAction<{
        calculationIndex: number
        cipherIndex: number
      }>
    ) {
      state.calculations[action.payload.calculationIndex].ciphers.splice(
        action.payload.cipherIndex,
        1
      )
    },
    moveCipher: (
      state,
      action: PayloadAction<{
        calculationIndex: number
        fromIndex: number
        toIndex: number
      }>
    ) => {
      const [movingCipher] = state.calculations[
        action.payload.calculationIndex
      ].ciphers.splice(action.payload.fromIndex, 1)
      state.calculations[action.payload.calculationIndex].ciphers.splice(
        action.payload.toIndex,
        0,
        movingCipher
      )
    },
    setCipherName(
      state,
      action: PayloadAction<{
        calculationIndex: number
        cipherIndex: number
        name: CipherName
      }>
    ) {
      state.calculations[action.payload.calculationIndex].ciphers[
        action.payload.cipherIndex
      ] = serializeCipher(createCipher(action.payload.name))
    },
    setCipherDirection(
      state,
      action: PayloadAction<{
        calculationIndex: number
        cipherIndex: number
        direction: CipherDirection
      }>
    ) {
      state.calculations[action.payload.calculationIndex].ciphers[
        action.payload.cipherIndex
      ].direction = action.payload.direction
    },
    setCipherSettings(
      state,
      action: PayloadAction<{
        calculationIndex: number
        cipherIndex: number
        settings: Settings
      }>
    ) {
      const cipher =
        state.calculations[action.payload.calculationIndex].ciphers[
          action.payload.cipherIndex
        ]

      if (isConfigurable(cipher)) {
        cipher.settings = { ...cipher.settings, ...action.payload.settings }
      }
    },
    //#endregion

    //#region Results
    recalculate(state) {
      state.calculations.forEach((calculation, index) => {
        calculation.result = calculation.ciphers.reduce(
          (res, cipher) =>
            cipher.direction === "encode"
              ? deserializeCipher(cipher).encode(res)
              : deserializeCipher(cipher).decode(res),
          index === 0 ? state.rootValue : state.calculations[index - 1].result
        )
      })
    },
    setRootValue(state, action: PayloadAction<string>) {
      state.rootValue = action.payload
    },
    //#endregion
  },
})

export const {
  addCalculation,
  removeCalculation,
  moveCalculation,
  recalculate,
  setRootValue,
  addCipher,
  removeCipher,
  moveCipher,
  setCipherDirection,
  setCipherSettings,
  setCipherName,
} = calculationsSlice.actions

export default calculationsSlice.reducer
