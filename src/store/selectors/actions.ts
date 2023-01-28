import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'
import { IActionsState } from '../reducers/types'

export const selectShowMonsterLoot = createSelector(
	(state: RootState) => state.actions,
	(actions: IActionsState) => actions.showMonsterLoot
)

export const selectStartMonsterAttack = createSelector(
	(state: RootState) => state.actions,
	(actions: IActionsState) => actions.startMonsterAttack
)

export const selectLoadingScene = createSelector(
	(state: RootState) => state.actions,
	(actions: IActionsState) => actions.loadingScene
)

export const selectCenario = createSelector(
	(state: RootState) => state.actions,
	(actions: IActionsState) => actions.cenario
)
