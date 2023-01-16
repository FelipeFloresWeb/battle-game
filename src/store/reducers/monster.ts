import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MonsterType } from '../../pages/api/monster/type'

const MonsterSlice = createSlice({
	name: 'monster',
	initialState: {
		loadingMonsterType: false,
		monsterType: {} as MonsterType,
	},
	reducers: {
		setLoadingMonster(state, action: PayloadAction<boolean>) {
			state.loadingMonsterType = action.payload
		},
		setMonsterType(state, action: PayloadAction<MonsterType>) {
			state.monsterType = action.payload
		},
	},
})

export const { setMonsterType, setLoadingMonster } = MonsterSlice.actions

export default MonsterSlice.reducer
