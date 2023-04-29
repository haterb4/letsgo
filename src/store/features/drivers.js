import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import driverlist from "@/fakedata/driverlist"

const initialState = {
    status: 'idle',
    array: [],
  }

export const getDrivers = createAsyncThunk('drivers/getDrivers', async () => {
    // const response = await axios.get(API + 'driver/all')   //Lorsqu'on connectera avec le backend...
    // return response.data
    return driverlist
  })

  const driversSlice = createSlice({
    name: 'drivers',
    initialState,
    reducers: {
        addDriver(state, action){
            state.array.push(action.payload)
          },
        updateDriver(state, action){
            let index = state.array.findIndex((value) => value.id === action.payload.id)
            if(index !== -1) state.array[index] = action.payload
          },
        deleteDriver(state, action){
            state.array = state.array.filter((value) => value.id !== action.payload.id)
          }
    },
    extraReducers: builder => {
      builder.addCase(HYDRATE, (state, action) => {
            return {
            ...state,
            ...action.payload.drivers,
            }
        })
        .addCase(getDrivers.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getDrivers.fulfilled, (state, action) => {
          state.array = action.payload
          state.status = 'loaded'
        })
        .addCase(getDrivers.rejected, (state, action) => {
            state.status = 'idle'
        })
        
    }
  })
  
export const { addDriver, updateDriver, deleteDriver } = driversSlice.actions

export default driversSlice.reducer
