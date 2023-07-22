import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface ActiveDashboardPage {
  name: string
}

const initialState: ActiveDashboardPage = {
  name: 'dashboard'
}

export const counterSlice = createSlice({
  name: 'ActiveDashboardPage',
  initialState,
  reducers: {
    setActivePage: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActivePage } = counterSlice.actions

export default counterSlice.reducer