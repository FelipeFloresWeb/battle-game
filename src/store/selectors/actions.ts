import { createSelector } from '@reduxjs/toolkit'

export const selectShowMonsterLoot = createSelector(
	(state: any) => state.actions,
	actions => actions.showMonsterLoot
)
