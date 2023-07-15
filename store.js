import { configureStore } from '@reduxjs/toolkit'
import  navigationSlice  from './slices/navigationSlice'

export const store = configureStore({
    reducer: {
        navigation: navigationSlice,
    },
  })