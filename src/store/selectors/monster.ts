import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectMonsterType = createSelector(
	(state: RootState) => state.monster,
	monster => monster.monsterType
)

export const selectLoadingMonsterType = createSelector(
	(state: RootState) => state.monster,
	monster => monster.loadingMonsterType
)

export const selectMonsterData = createSelector(
	(state: RootState) => state.monster,
	monster => monster.monsterData
)

export const selectLoadingMonsterData = createSelector(
	(state: RootState) => state.monster,
	monster => monster.loadingMonsterData
)

export const selectMonsterIsDead = createSelector(
	(state: RootState) => state.monster,
	monster => monster.isDead
)

export const selectMonsterImage = createSelector(
	(state: RootState) => state.monster,
	monster => monster.monsterData.image
)

export const selectMonsterIsAttacking = createSelector(
	(state: RootState) => state.monster,
	monster => monster.isAttacking
)

export const selectHideMonster = createSelector(
	(state: RootState) => state.monster,
	monster => monster.hideMonster
)

export const selectMonsterLoot = createSelector(
	(state: RootState) => state.monster,
	monster => monster.loot
)
