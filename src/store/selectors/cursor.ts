import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectCurrentCursor = createSelector(
	(state: RootState) => state.cursor,
	cursor => cursor.currentCursor
)

export const selectDefaultCursor = createSelector(
	(state: RootState) => state.cursor,
	cursor => cursor.defaultCursor
)

export const selectMyCursor = createSelector(
	(state: RootState) => state.cursor,
	cursor => cursor.myCursor
)
