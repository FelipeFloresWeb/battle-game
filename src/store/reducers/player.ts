import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const PlayerSclie = createSlice({
	name: 'player',
	initialState: {
		playerIsAttacking: false,
		canAttack: true,
	},
	reducers: {
		setPlayerAttacking(state, action: PayloadAction<boolean>) {
			state.playerIsAttacking = action.payload
		},
		setPlayerCanAttack(state, action: PayloadAction<boolean>) {
			state.canAttack = action.payload
		},
	},
})

export const { setPlayerAttacking, setPlayerCanAttack } = PlayerSclie.actions

export default PlayerSclie.reducer
