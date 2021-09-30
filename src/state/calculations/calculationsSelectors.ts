import { createSelector } from "reselect"
import { RootState } from "../store"

export const selectCalculations = (state: RootState) => state.calculations
export const selectRootValue = createSelector(
  selectCalculations,
  (calculations) => calculations.rootValue
)
export const selectCalculationSteps = createSelector(
  selectCalculations,
  (calculations) => calculations.calculations
)
