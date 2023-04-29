import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
    status: 'idle',
    data: {
        name: 'BUCA VOYAGE',
        isOnline: true,
        notificationCount: 18,
    },
  }

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
      builder.addCase(HYDRATE, (state, action) => {
            return {
            ...state,
            ...action.payload.user,
            }
        })        
    }
  })
  

export default userSlice.reducer
