import { createSelector } from '@reduxjs/toolkit'

export const selectMonsterType = createSelector(
	(state: any) => state.monster,
	monster => monster.monsterType
)

export const selectLoadingMonsterType = createSelector(
	(state: any) => state.monster,
	monster => monster.loadingMonsterType
)

export const selectMonsterData = createSelector(
	(state: any) => state.monster,
	monster => monster.monsterData
)

export const selectMonsterIsDead = createSelector(
	(state: any) => state.monster,
	monster => monster.isDead
)

export const selectMonsterImage = createSelector(
	(state: any) => state.monster,
	monster => monster.image
)
