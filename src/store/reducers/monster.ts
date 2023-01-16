import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MonsterData } from '../../pages/api/monster/monster'
import { MonsterType } from '../../pages/api/monster/type'

const MonsterSlice = createSlice({
	name: 'monster',
	initialState: {
		isDead: false,
		loadingMonsterType: false,
		monsterType: {} as MonsterType,
		monsterData: {} as MonsterData,
		image: '',
	},
	reducers: {
		setLoadingMonster(state, action: PayloadAction<boolean>) {
			state.loadingMonsterType = action.payload
		},
		setMonsterType(state, action: PayloadAction<MonsterType>) {
			state.monsterType = action.payload
		},
		setMonsterData(state, action: PayloadAction<MonsterData>) {
			state.monsterData = action.payload
			state.image = ` images/monsters/stage1/${action.payload.index}.png`
		},
		setMonsterIsDead(state, action: PayloadAction<boolean>) {
			state.isDead = action.payload
		},
	},
})

export const { setMonsterType, setLoadingMonster, setMonsterData, setMonsterIsDead } = MonsterSlice.actions

export default MonsterSlice.reducer
