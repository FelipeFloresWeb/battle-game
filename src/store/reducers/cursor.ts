import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ICursorState } from './types'

const CursorSlice = createSlice({
	name: 'cursor',
	initialState: {
		defaultCursor: 'images/swords/0.webp',
		myCursor: 'images/swords/1.webp',
		currentCursor: 'images/swords/1.webp',
	} as ICursorState,
	reducers: {
		setCurrentCursor(state, action: PayloadAction<string>) {
			state.currentCursor = action?.payload
		},
	},
})

export const { setCurrentCursor } = CursorSlice.actions

export default CursorSlice.reducer
