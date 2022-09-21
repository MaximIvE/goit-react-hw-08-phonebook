import axios from "axios";

const instance = axios.create({
    baseURL: "https://connections-api.herokuapp.com",
});

export const registerNewUserApi = async (newUser) => {
    const {data} = await instance.get("/users/signup", newUser);
    return data;
};

export const loginUserApi = async (user) => {
    const {data} = await instance.get("/users/login", user);
    return data;
};

export const logoutUserApi = async (user) => {
    const {data} = await instance.get("/users/logout", user);
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


