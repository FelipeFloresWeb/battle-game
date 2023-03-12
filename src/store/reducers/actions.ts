import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FETCH_MONSTER_INTERVAL } from '../../utils/constants'
import { IActionsState } from './types'

const ActionSlice = createSlice({
	name: 'actions',
	initialState: {
		startMonsterAttack: false,
		battleStarted: false,
		showMonsterLoot: false,
		loadingScene: false,
		cenario: 0,
		stage: 0,
		fetchMonsterInterval: FETCH_MONSTER_INTERVAL,
	} as IActionsState,
	reducers: {
		setShowMonsterLoot(state, action: PayloadAction<boolean>) {
			state.showMonsterLoot = action.payload
		},
		setBattleStarted(state, action: PayloadAction<boolean>) {
			state.battleStarted = action.payload
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
		setStage(state, action: PayloadAction<number>) {
			state.stage = action.payload
		},
		setFetchMonsterInterval(state, action: PayloadAction<number>) {
			state.fetchMonsterInterval = action.payload
		},
	},
})

export const {
	setShowMonsterLoot,
	setStartMonsterAttack,
	setLoadingScene,
	setCenario,
	setStage,
	setFetchMonsterInterval,
	setBattleStarted,
} = ActionSlice.actions

export default ActionSlice.reducer
