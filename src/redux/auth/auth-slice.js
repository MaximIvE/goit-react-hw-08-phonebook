import { createSlice } from "@reduxjs/toolkit";

import { signup } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    arror: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending]: (store)               =>  {return {...store,  loading: true,      error:null}},
        [signup.fulfilled]: (store, {payload})  =>  {return {...store,  loading: false,     user: payload.user, token: payload.token,   isLogin: true}},
        [signup.fulfilled]: (store, {payload})  =>  {return {...store,  loading: false,     error:payload}},
    }
});

export default authSlice.reducer;