import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPlayerItems, IPlayerState, IPlayerStats } from './types'

const PlayerSlice = createSlice({
	name: 'player',
	initialState: {
		playerIsAttacking: false,
		playerIsDead: false,
		canAttack: true,
		stats: {
			health: 100,
			maxHealth: 100,
			attack: 5,
			defense: 10,
			attackSpeed: 2000,
			exp: 0,
			maxExp: 1000,
			level: 1,
		},
		items: {
			gold: 100000,
			diamond: 160,
		},
	} as IPlayerState,
	reducers: {
		setPlayerAttacking(state, action: PayloadAction<boolean>) {
			state.playerIsAttacking = action.payload
		},
		setPlayerCanAttack(state, action: PayloadAction<boolean>) {
			state.canAttack = action.payload
		},
		setPlayerIsDead(state, action: PayloadAction<boolean>) {
			state.playerIsDead = action.payload
		},
		setPlayerStats(state, action: PayloadAction<IPlayerStats>) {
			state.stats = action.payload
		},
		setPlayerItems(state, action: PayloadAction<IPlayerItems>) {
			state.items = action.payload
		},
	},
})

export const { setPlayerAttacking, setPlayerCanAttack, setPlayerIsDead, setPlayerStats, setPlayerItems } =
	PlayerSlice.actions

export default PlayerSlice.reducer
