import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const RegisterAction = createAsyncThunk(
  'users/register',
  async (payload) => {
    await fetch(
      'http://localhost:5000/api/users/register',
      {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
)

const RegisterSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: {},
  },
  extraReducers: {
    [RegisterAction.fulfilled]: (state, action) => {
      state.currentUser = action.payload
    },
  },
})

export default RegisterSlice.reducer
