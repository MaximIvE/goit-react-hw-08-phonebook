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
            const visible=1;
            // console.log(response);
            // console.log({status, message, code});
            return thunkAPI.rejectWithValue({status, message, visible});
        }
    }
);

export const login = createAsyncThunk(
    "auth/login", 
    async (data, thunkAPI) => {
        try {
            const result = await loginUserApi(data);
            return result;
        } catch ({response}) {
            console.log(response);
            const {status, statusText: message } = response;
            const visible=1;
            return thunkAPI.rejectWithValue({status, message, visible});
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout", 
    async (data, thunkAPI) => {
        try {
            const result = await logoutUserApi(data);
            return result;
        } catch ({response}) {
            const {status, statusText: message } = response;
            const visible=1;
            return thunkAPI.rejectWithValue({status, message, visible});
        }
    }
);
