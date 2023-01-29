import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MonsterData, MonsterType } from '../../pages/api/monster/types'
import { IMonsterState } from './types'

const MonsterSlice = createSlice({
	name: 'monster',
	initialState: {
		isDead: true,
		loadingMonsterData: false,
		loadingMonsterType: false,
		isAttacking: false,
		monsterType: {} as MonsterType,
		monsterData: {} as MonsterData,
		image: '',
		hideMonster: false,
	} as IMonsterState,
	reducers: {
		setLoadingMonsterType(state, action: PayloadAction<boolean>) {
			state.loadingMonsterType = action.payload
		},
		setMonsterType(state, action: PayloadAction<MonsterType>) {
			state.monsterType = action.payload
		},
		setLoadingMonsterData(state, action: PayloadAction<boolean>) {
			state.loadingMonsterData = action.payload
		},
		setMonsterData(state, action: PayloadAction<MonsterData>) {
			state.monsterData = action.payload
		},
		setMonsterIsDead(state, action: PayloadAction<boolean>) {
			state.isDead = action.payload
		},
		setMonsterIsAttacking(state, action: PayloadAction<boolean>) {
			state.isAttacking = action.payload
		},
		setHideMonster(state, action: PayloadAction<boolean>) {
			state.hideMonster = action.payload
		},
		resetMonsterState(state) {
			state.isDead = true
			state.loadingMonsterData = false
			state.loadingMonsterType = false
			state.isAttacking = false
			state.monsterType = {} as MonsterType
			state.monsterData = {} as MonsterData
			state.image = ''
			state.hideMonster = false
		},
	},
})

export const {
	setMonsterType,
	setLoadingMonsterType,
	setMonsterData,
	setMonsterIsDead,
	setLoadingMonsterData,
	setMonsterIsAttacking,
	setHideMonster,
	resetMonsterState,
} = MonsterSlice.actions

export default MonsterSlice.reducer
