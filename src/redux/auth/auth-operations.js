import { createAsyncThunk } from "@reduxjs/toolkit";

import {registerNewUserApi}  from "../../shared/api/authApi";

export const signup = createAsyncThunk(
    "auth/signup", 
    async (data, thunkAPI) => {
        try {
            const result = await registerNewUserApi(data);
            return result;
        } catch (error) {
            const status = error.response.status;
            const message = error.response.data.message || error.message;
            const code = error.response.data.code;

            // console.log(error);
            // console.log({status, message, code});
            return thunkAPI.rejectWithValue({status, message, code});
        }
    }
);
