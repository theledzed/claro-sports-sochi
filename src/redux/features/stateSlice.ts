import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  windowType: 'window',
  youtubeId: 'peuVFBTt47o?si=qGLXgwfCzisi3JDK',
  loading: false,
  videoRef: null,
  selectedVideoId: 1
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
