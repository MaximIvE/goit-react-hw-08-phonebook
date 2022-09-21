import { createAsyncThunk } from "@reduxjs/toolkit";

import {registerNewUserApi}  from "../../shared/api/authApi";

export const signup = createAsyncThunk(
    "auth/signup", 
    async (data, {rejectedWithValue}) => {
        try {
            const result = await registerNewUserApi(data);
            return result;
        } catch (error) {
            return rejectedWithValue(error);
        }
    }
);
