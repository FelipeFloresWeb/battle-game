import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IActionsState } from './types'

const ActionSlice = createSlice({
	name: 'actions',
	initialState: {
		showMonsterLoot: false,
	} as IActionsState,
	reducers: {
		setShowMonsterLoot(state, action: PayloadAction<boolean>) {
			state.showMonsterLoot = action.payload
		},
	},
})

export const { setShowMonsterLoot } = ActionSlice.actions

export default ActionSlice.reducer
