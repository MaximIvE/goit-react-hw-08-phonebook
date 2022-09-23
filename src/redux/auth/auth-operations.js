import { createAsyncThunk } from "@reduxjs/toolkit";

import {registerNewUserApi, loginUserApi, logoutUserApi}  from "../../shared/api/authApi";

export const signup = createAsyncThunk(
    "auth/signup", 
    async (data, thunkAPI) => {
        try {
            const result = await registerNewUserApi(data);
            return result;
        } catch ({response}) {
            const {status, statusText: message } = response;

            // console.log(response);
            // console.log({status, message, code});
            return thunkAPI.rejectWithValue({status, message});
        }
    }
);

export const login = createAsyncThunk(
    "auth/login", 
    async (data, thunkAPI) => {
        console.log(data);
        try {
            const result = await loginUserApi(data);
            console.log(result);
            return result;
        } catch ({response}) {
            const {status, statusText: message } = response;

            return thunkAPI.rejectWithValue({status, message});
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout", 
    async (data, thunkAPI) => {
        console.log(data);
        try {
            const result = await logoutUserApi(data);
            console.log(result);
            return result;
        } catch ({response}) {
            const {status, statusText: message } = response;

            return thunkAPI.rejectWithValue({status, message});
        }
    }
);
