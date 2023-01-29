import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IRatesState } from './types'

const RatesSlice = createSlice({
	name: 'rates',
	initialState: {
		expMultilplier: 1,
		dropMultiplier: 1,
		expLostRate: 0.1,
		goldLostRate: 0.03,
	} as IRatesState,
	reducers: {
		setExpMultilplier(state, action: PayloadAction<number>) {
			state.expMultilplier = action.payload
		},
	},
})

export const { setExpMultilplier } = RatesSlice.actions

export default RatesSlice.reducer
