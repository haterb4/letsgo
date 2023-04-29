import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"
import triplist from "@/fakedata/triplist"

const initialState = {
    status: 'idle',
    array: [],
  }

export const getTrips = createAsyncThunk('trips/getTrips', async () => {
    // const response = await axios.get(API + 'trip/all')   //Lorsqu'on connectera avec le backend...
    // return response.data
    return triplist
  })

  const tripsSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        addTrip(state, action){
            state.array.push(action.payload)
          },
        updateTrip(state, action){
            let index = state.array.findIndex((value) => value.id === action.payload.id)
            if(index !== -1) state.array[index] = action.payload
          },
        deleteTrip(state, action){
            state.array = state.array.filter((value) => value.id !== action.payload.id)
          }
    },
    extraReducers: builder => {
      builder.addCase(HYDRATE, (state, action) => {
            return {
            ...state,
            ...action.payload.trips,
            }
        })
        .addCase(getTrips.pending, (state, action) => {
          state.status = 'loading'
        })
        .addCase(getTrips.fulfilled, (state, action) => {
          state.array = action.payload
          state.status = 'loaded'
        })
        .addCase(getTrips.rejected, (state, action) => {
            state.status = 'idle'
        })
        
    }
  })
  
export const { addTrip, updateTrip, deleteTrip } = tripsSlice.actions

export default tripsSlice.reducer
