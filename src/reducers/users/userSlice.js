import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    name: '',
    phone: ''
  },
  reducers: {
    userLoggedIn(state, action) {
      state = {
        id: action.payload.id,
        name: action.payload.name,
        phone: action.payload.phone
      }
    },
    userLoggedOut(state, action) {
      state = {
        id: '',
        name: '',
        phone: '',
      }
    }
  }
})

export const { userLoggedIn, userLoggedOut } = userSlice.actions
export default userSlice.reducer