import { useDispatch, useSelector } from "react-redux"
import { serializeCipher } from "../ciphers"
import { Clear } from "../ciphers/cipherlib/Clear"
import CipherChain from "../components/molecules/cipherchain/CipherChain"
import Footer from "../components/molecules/footer/Footer"
import Header from "../components/molecules/header/Header"
import { Valuebox } from "../components/molecules/valuebox/Valuebox"
import {
  selectCalculationSteps,
  selectRootValue,
} from "../state/calculations/calculationsSelectors"
import {
  addCalculation,
  setRootValue,
} from "../state/calculations/calculationsSlice"
import "./App.css"

export const App = () => {
  const dispatch = useDispatch()
  const rootValue = useSelector(selectRootValue)
  const calculationSteps = useSelector(selectCalculationSteps)

  return (
    <div className="app dark">
      <Header />
      <main className="cipherlist-container">
        <Valuebox
          value={rootValue}
          onValueChange={(newValue) => {
            dispatch(setRootValue(newValue))
          }}
        />
        {calculationSteps.map((step, stepIndex) => (
          <CipherChain
            key={stepIndex}
            calculation={step}
            calculationIndex={stepIndex}
          />
        ))}
        <button
          className="btn-addcalculation"
          onClick={() =>
            dispatch(
              addCalculation({ ciphers: [serializeCipher(new Clear())] })
            )
          }
        >
          +
        </button>
      </main>
      <Footer />
      <div id="modal-root"></div>
    </div>
  )
}
