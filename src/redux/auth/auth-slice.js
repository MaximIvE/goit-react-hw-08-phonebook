import { createSlice } from "@reduxjs/toolkit";
import { signup, login, logout } from "./auth-operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [signup.pending]:   (store)             =>  {return {...store,  loading: true,      error:null}},
        [signup.fulfilled]: (store, {payload})  =>  {return {...store,  loading: false,     user: payload.user, token: payload.token,   isLogin: true}},
        [signup.rejected]:  (store, {payload})  =>  {return {...store,  loading: false,     error: payload}},

        [login.pending]:   (store)             =>  {return {...store,  loading: true,      error:null}},
        [login.fulfilled]: (store, {payload})  =>  {return {...store,  loading: false,     user: payload.user, token: payload.token,   isLogin: true}},
        [login.rejected]:  (store, {payload})  =>  {return {...store,  loading: false,     error: payload}},

        [logout.pending]:   (store)             =>  {return {...store,  loading: true,      error:null}},
        [logout.fulfilled]: (store)             =>  {return {...store,  loading: false,     user: {}, token: "",   isLogin: false}},
        [logout.rejected]:  (store, {payload})  =>  {return {...store,  loading: false,     error: payload}},
    }
});

export default authSlice.reducer;