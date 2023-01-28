import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IActionsState } from './types'

const ActionSlice = createSlice({
	name: 'actions',
	initialState: {
		startMonsterAttack: false,
		showMonsterLoot: false,
	} as IActionsState,
	reducers: {
		setShowMonsterLoot(state, action: PayloadAction<boolean>) {
			state.showMonsterLoot = action.payload
		},
		setStartMonsterAttack(state, action: PayloadAction<boolean>) {
			state.startMonsterAttack = action.payload
		},
	},
})

export const { setShowMonsterLoot, setStartMonsterAttack } = ActionSlice.actions

export default ActionSlice.reducer
