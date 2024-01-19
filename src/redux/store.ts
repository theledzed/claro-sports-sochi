import { configureStore } from '@reduxjs/toolkit'
import stateReducer from '@/redux/features/stateSlice'

export const store = configureStore({
  reducer: {
    stateReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
