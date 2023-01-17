import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MonsterData, MonsterType } from '../../pages/api/monster/types'

const MonsterSlice = createSlice({
	name: 'monster',
	initialState: {
		isDead: false,
		loadingMonsterData: false,
		loadingMonsterType: false,
		isAttacking: false,
		monsterType: {} as MonsterType,
		monsterData: {} as MonsterData,
		image: '',
	},
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
			state.image = ` images/monsters/stage1/${action.payload.index}.png`
		},
		setMonsterIsDead(state, action: PayloadAction<boolean>) {
			state.isDead = action.payload
		},
		setMonsterIsAttacking(state, action: PayloadAction<boolean>) {
			state.isAttacking = action.payload
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
} = MonsterSlice.actions

export default MonsterSlice.reducer
