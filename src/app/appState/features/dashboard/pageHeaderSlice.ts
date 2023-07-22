import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import React from 'react';

export interface headerState {
  bg: string;
  title: React.ReactNode;
  description?: string;
  image: string;
}

const initialState: headerState = {
    bg: '',
    title: '',
    image: '',
}

export const pageHeaderSlice = createSlice({
  name: 'pageHeader',
  initialState,
  reducers: {
    setHeader: (state, action: PayloadAction<headerState>) => {
      state.bg = action.payload.bg
      state.description = action.payload.description
      state.title = action.payload.title
      state.image = action.payload.image
    },
  },
})

// Action creators are generated for each case reducer function
export const { setHeader } = pageHeaderSlice.actions

export default pageHeaderSlice.reducer