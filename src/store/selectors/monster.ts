import { createSelector } from '@reduxjs/toolkit'

export const selectMonsterType = createSelector(
	(state: any) => state.monster,
	monster => monster.monsterType
)

export const selectLoadingMonsterType = createSelector(
	(state: any) => state.monster,
	monster => monster.loadingMonsterType
)
