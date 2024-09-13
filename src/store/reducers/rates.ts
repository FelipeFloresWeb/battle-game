import { createSlice } from '@reduxjs/toolkit'
import { IRatesState } from './types'

const RatesSlice = createSlice({
	name: 'rates',
	initialState: {
		expMultilplier: 1,
		dropMultiplier: 1,
		expLostRate: 0.1,
		goldLostRate: 0.03,
	} as IRatesState,
	reducers: {},
})

export const {} = RatesSlice.actions

export default RatesSlice.reducer
