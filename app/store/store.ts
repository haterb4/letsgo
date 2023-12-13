import { combineReducers, configureStore } from '@reduxjs/toolkit'
import languageReducer from './features/language/languageSlice'
import tokenReducer from './features/token/tokenSlice'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'letsgo',
    storage,
}

const rootReducer = combineReducers({
    language: languageReducer,
    token: tokenReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch