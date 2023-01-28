import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IActionsState } from './types'

const ActionSlice = createSlice({
	name: 'actions',
	initialState: {
		startMonsterAttack: false,
		showMonsterLoot: false,
		loadingScene: false,
		cenario: 0,
	} as IActionsState,
	reducers: {
		setShowMonsterLoot(state, action: PayloadAction<boolean>) {
			state.showMonsterLoot = action.payload
		},
		setStartMonsterAttack(state, action: PayloadAction<boolean>) {
			state.startMonsterAttack = action.payload
		},
		setLoadingScene(state, action: PayloadAction<boolean>) {
			state.loadingScene = action.payload
		},
		setCenario(state, action: PayloadAction<number>) {
			state.cenario = action.payload
		},
	},
})

export const { setShowMonsterLoot, setStartMonsterAttack, setLoadingScene, setCenario } = ActionSlice.actions

export default ActionSlice.reducer
