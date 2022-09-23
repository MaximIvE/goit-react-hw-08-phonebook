import axios from "axios";
const BASE_URL = "https://connections-api.herokuapp.com";

const instance = axios.create({
    baseURL: BASE_URL,
});

export const registerNewUserApi = async (newUser) => {
    const {data} = await instance.post("/users/signup", newUser);
    return data;
};

export const loginUserApi = async (user) => {
    const {data} = await instance.post("/users/login", user);
    instance.defaults.headers.common.authorization = data.token;
    return data;
};

export const logoutUserApi = async (user) => {
    const {data} = await instance.post("/users/logout");
    instance.defaults.headers.common.authorization = "";
    return data;
};

export const addItemApi = async (data) => {
    const {data: result} = await instance.post("/", data);
    return result;
};

export const removeItemApi = async (id) => {
    const data = await instance.delete(`/${id}`);
    return data;
};