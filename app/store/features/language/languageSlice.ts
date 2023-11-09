import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

// Define a type for the slice state
interface ILanguageState {
  lang: string;
}

// Define the initial state using that type
const initialState: ILanguageState = {
  lang: "french",
}

export const languageSlice = createSlice({
  name: 'language',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setRenderingLanguage: (state, action: PayloadAction<string>) => {
      state.lang = action.payload
    },
  },
})

export const { setRenderingLanguage } = languageSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectRenderingLanguage = (state: RootState) => state.language.lang

export default languageSlice.reducer