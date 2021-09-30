import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { calculationsMiddleware } from "./calculations/calculationsMiddleware"
import calculationsReducer from "./calculations/calculationsSlice"

const rootReducer = combineReducers({
  calculations: calculationsReducer,
})

const customMiddleware = [calculationsMiddleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...customMiddleware,
  ],
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
