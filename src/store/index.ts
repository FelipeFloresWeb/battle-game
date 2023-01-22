import { configureStore } from '@reduxjs/toolkit'
import actions from './reducers/actions'
import monster from './reducers/monster'
import player from './reducers/player'

export const store = configureStore({
	reducer: {
		monster,
		player,
		actions,
	},
})
