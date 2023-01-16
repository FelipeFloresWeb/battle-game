import { createSelector } from '@reduxjs/toolkit'

export const selectPlayerIsAttacking = createSelector(
	(state: any) => state.player,
	player => player.playerIsAttacking
)

export const selectPlayerCanAttack = createSelector(
	(state: any) => state.player,
	player => player.canAttack
)
