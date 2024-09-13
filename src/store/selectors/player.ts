import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '..'

export const selectPlayerIsAttacking = createSelector(
	(state: RootState) => state.player,
	player => player.playerIsAttacking
)

export const selectPlayerCanAttack = createSelector(
	(state: RootState) => state.player,
	player => player.canAttack
)

export const selectPlayerHit = createSelector(
	(state: RootState) => state.player,
	player => player.hitPlayer
)

export const selectPlayerIsDead = createSelector(
	(state: RootState) => state.player,
	player => player.playerIsDead
)

export const selectPlayerStats = createSelector(
	(state: RootState) => state.player,
	player => player.stats
)

export const selectPlayerItems = createSelector(
	(state: RootState) => state.player,
	player => player.items
)
