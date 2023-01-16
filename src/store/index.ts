import { configureStore } from '@reduxjs/toolkit'
import monster from './reducers/monster'
import player from './reducers/player'

export const store = configureStore({
	reducer: {
		monster,
		player,
	},
})
