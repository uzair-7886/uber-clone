import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  origin:null,
    destination:null,
    travelTimeInformation:null,
}

export const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setOrigin:(state,action)=>{
        state.origin=action.payload;
    },
    setDestination:(state,action)=>{
        state.destination=action.payload;
    },
    setTravelTimeInformation:(state,action)=>{
        state.travelTimeInformation=action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setOrigin,setDestination,setTravelTimeInformation } = navigationSlice.actions

export const selectOrigin=(state)=>state.navigation.origin

export const selectDestination=(state)=>state.navigation.destination

export const selectTravelTimeInformation=(state)=>state.navigation.travelTimeInformation

export default navigationSlice.reducer