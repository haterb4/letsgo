import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface ITokenState {
  access_token: string;
  firstName: string,
  lastName: string,
  email: string,
}

// Define the initial state using that type
const initialState: ITokenState = {
  access_token: "french",
  firstName: "",
  lastName: "",
  email: "",
}

export const tokenSlice = createSlice({
  name: 'token',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload
    },
    setUser: (state, action: PayloadAction<{firstName: string, lastName: string, email: string}>) => {
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
        state.access_token = ''
        state.email = '',
        state.firstName = ''
        state.lastName = ''
    }
  },
})

export const { setAccessToken, clearUser, setUser } = tokenSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectToken = (state: RootState) => state.token.access_token

export default tokenSlice.reducer