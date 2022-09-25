import axios from "axios";
// import {instance} from "./authApi";
const BASE_URL = "https://connections-api.herokuapp.com";

export const instance = axios.create({
    baseURL: BASE_URL,
});

export const getItemsApi = async (token) => {
    instance.defaults.headers.common.authorization = token;
    const {data} = await instance.get("/contacts");
    return data;
};

export const addItemApi = async (data) => {
    const {data: result} = await instance.post("/contacts", data);
    return result;
};

export const removeItemApi = async (id) => {
    const data = await instance.delete(`/contacts/${id}`);
    return data;
};
