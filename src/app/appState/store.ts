'use client'

import { configureStore } from '@reduxjs/toolkit'
import ActiveDashboardPageReducer from './features/dashboard/activePageSlice'
import PageHeaderReducer from './features/dashboard/pageHeaderSlice'

export const store = configureStore({
  reducer: {
    ActiveDashboardPage: ActiveDashboardPageReducer,
    pageHeader: PageHeaderReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch