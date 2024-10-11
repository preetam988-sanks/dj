import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from './userService';

// Async action for registering a user
export const registerUser = createAsyncThunk(
    "auth/register",
    async (userData, thunkAPI) => {
        try {
            return await authService.register(userData);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// Initial state for the auth slice
const initialState = {
    user: "",          // Holds user data after successful registration
    isError: false,    // Tracks if there was an error
    isSuccess: false,  // Tracks if registration was successful
    isLoading: false,  // Indicates if the registration is in progress
    message: "",       // Holds any error or success messages
};

// Auth slice with reducers and extraReducers
export const authSlice = createSlice({
    name: 'auth',
    initialState,  // Correct reference to initialState variable
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.user = action.payload;  // Store the user data
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload || action.error.message || 'Something went wrong';
            });
    },
});

export default authSlice.reducer;
