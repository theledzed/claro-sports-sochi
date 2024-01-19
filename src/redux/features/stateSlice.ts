import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  windowType: 'window',
  youtubeId: 'dL7gfnEB3T8?si=W3f0lOYjKF2XmWvL',
  loading: false,
  videoRef: null
}

export const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setState: (state, action) => {
      const { payload } = action
      return (state = { ...initialState, ...state, ...payload })
    }
  }
})

export const { setState } = stateSlice.actions

export default stateSlice.reducer
