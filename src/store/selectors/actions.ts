import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectShowMonsterLoot = createSelector(
	(state: RootState) => state.actions,
	actions => actions.showMonsterLoot
)

export const selectStartMonsterAttack = createSelector(
	(state: RootState) => state.actions,
	actions => actions.startMonsterAttack
)

export const selectLoadingScene = createSelector(
	(state: RootState) => state.actions,
	actions => actions.loadingScene
)

export const selectCenario = createSelector(
	(state: RootState) => state.actions,
	actions => actions.cenario
)

export const selectStage = createSelector(
	(state: RootState) => state.actions,
	actions => actions.stage
)

export const selectMonsterInterval = createSelector(
	(state: RootState) => state.actions,
	actions => actions.fetchMonsterInterval
)

export const selectMonsterLoot = createSelector(
	(state: RootState) => state.monster,
	monster => monster.loot
)
