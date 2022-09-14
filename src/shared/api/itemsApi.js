import axios from "axios";

const instance = axios.create({
    baseURL: "https://6320b2a49f82827dcf327991.mockapi.io/contacts",
});

export const getItemsApi = async () => {
    const {data} = await instance.get("/");
    return data;
};

export const addItemApi = async (data) => {
    const {data: result} = await instance.post("/", data);
    return result;
};

