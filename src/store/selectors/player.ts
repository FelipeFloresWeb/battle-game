import { createSelector } from '@reduxjs/toolkit'

export const selectPlayerIsAttacking = createSelector(
	(state: any) => state.player,
	player => player.playerIsAttacking
)

export const selectPlayerCanAttack = createSelector(
	(state: any) => state.player,
	player => player.canAttack
)

export const selectPlayerHit = createSelector(
	(state: any) => state.player,
	player => player.hitPlayer
)

export const selectPlayerIsDead = createSelector(
	(state: any) => state.player,
	player => player.playerIsDead
)

export const selectPlayerStats = createSelector(
	(state: any) => state.player,
	player => player.stats
)

export const selectPlayerItems = createSelector(
	(state: any) => state.player,
	player => player.items
)
