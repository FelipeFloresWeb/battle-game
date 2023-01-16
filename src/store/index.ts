import { configureStore } from '@reduxjs/toolkit'
import monster from './reducers/monster'

export const store = configureStore({
	reducer: {
		monster,
	},
})
