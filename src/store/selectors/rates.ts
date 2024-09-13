import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectExpMultilplier = createSelector(
	(state: RootState) => state.rates,
	rates => rates.expMultilplier
)

export const selectDropMultiplier = createSelector(
	(state: RootState) => state.rates,
	rates => rates.dropMultiplier
)

export const selectExpLostRate = createSelector(
	(state: RootState) => state.rates,
	rates => rates.expLostRate
)

export const selectGoldLostRate = createSelector(
	(state: RootState) => state.rates,
	rates => rates.goldLostRate
)
