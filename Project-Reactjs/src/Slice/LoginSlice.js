import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const LoginAction = createAsyncThunk("users/login", async (payload) => {
	const response = await fetch("http://localhost:5000/api/users/login", {
		method: "POST",
		body: JSON.stringify(payload),
		headers: {
			"Content-Type": "application/json",
		},
	})

	const dataRaw = await response.json()

	localStorage.setItem("user", JSON.stringify([dataRaw]))
	return [dataRaw]
})

const LoginSlice = createSlice({
	name: "user",
	initialState: {
		currentUser: JSON.parse(localStorage.getItem("user")) || {},
	},
	extraReducers: {
		[LoginAction.fulfilled]: (state, action) => {
			state.currentUser = action.payload
		},
	},
})

export default LoginSlice.reducer
