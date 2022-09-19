import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "shared/api/itemsApi";


//Створюємо операцію по запиту для отримання даних при першому завантаженнню сторінки
export const fetchItems = createAsyncThunk(
    "items/fetch", 
    async(_, thunkAPI) => {
        try {
            const data = await api.getItemsApi();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

//Створюємо операцію по запиту для додавання контакта на бекенд
export const addItem = createAsyncThunk(
    "item/add", 
    async(item, thunkAPI) => {
        try {
            const data = await api.addItemApi(item);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        } 
    },
    {
        condition: (data, {getState}) => {
            const{items} = getState().contacts;
            if (items.find(item => item.name === data.name)) {
                alert(data.name + " " + "вже є в контактах");
                return false;
            }
        }
    }
);

//Створюємо операцію по запиту видаленню контакта з бекенду
export const removeItem = createAsyncThunk(
    "item/remove", 
    async(id, thunkAPI) => {
        try {
            await api.removeItemApi(id);
            return id;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);