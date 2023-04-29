import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import tripsReducer from './features/trips'
import driversReducer from './features/drivers'
import vehiclesReducer from './features/vehicles'
import userReducer from './features/user'

const makeStore = () =>
  configureStore({
    reducer: {
        trips: tripsReducer,
        drivers: driversReducer,
        vehicles: vehiclesReducer,
        user: userReducer
    },
    devTools: true,
  })

export const wrapper = createWrapper(makeStore);