import { Middleware } from "redux"

import { RootState, store } from "../store"
import { recalculate } from "./calculationsSlice"

export const calculationsMiddleware: Middleware<{}, RootState> =
  (storeApi) => (next) => (action) => {
    next(action)

    // recalculate all results
    if (
      [
        "calculations/moveCipher",
        "calculations/setRootValue",
        "calculations/moveCalculation",
        "calculations/setCipherName",
        "calculations/setCipherDirection",
        "calculations/setCipherSettings",
      ].includes(action.type)
    ) {
      store.dispatch(recalculate())
    }
  }
