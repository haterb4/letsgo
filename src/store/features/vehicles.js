import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import vehiclelist from "@/fakedata/vehiclelist"

const initialState = {
    status: 'idle',
    array: [],
  }

export const getVehicles = createAsyncThunk('vehicles/getVehicles', async () => {
    // const response = await axios.get(API + 'vehicle/all')   //Lorsqu'on connectera avec le backend...
    // return response.data
    return vehiclelist
  })

  const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        addVehicle(state, action){
            state.array.push(action.payload)
          },
        updateVehicle(state, action){
            let index = state.array.findIndex((value) => value.id === action.payload.id)
            if(index !== -1) state.array[index] = action.payload
          },
        deleteVehicle(state, action){
            state.array = state.array.filter((value) => value.id !== action.payload.id)
          }
    },
    extraReducers: builder => {
      builder.addCase(HYDRATE, (state, action) => {
            return {
            ...state,
            ...action.payload.vehicles,
            }
        })
        .addCase(getVehicles.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getVehicles.fulfilled, (state, action) => {
          state.array = action.payload
          state.status = 'loaded'
        })
        .addCase(getVehicles.rejected, (state, action) => {
            state.status = 'idle'
        })
        
    }
  })
  
export const { addVehicle, updateVehicle, deleteVehicle } = vehiclesSlice.actions

export default vehiclesSlice.reducer
