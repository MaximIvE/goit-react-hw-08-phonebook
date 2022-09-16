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
    async(_, thunkAPI) => {
        
    }
);

//Створюємо операцію по запиту видаленню контакта з бекенду
export const removeItem = createAsyncThunk(
    "item/remofe", 
    async(_, thunkAPI) => {
       
    }
);


// export const addItem = (item) => {
// const func = async (dispatch) => {
//     try{
//         dispatch(actions.addItemsLoading());
//         const result = await api.addItemApi(item);
//         // if ( data.status !== 200){ throw new Error (`${data.status} | ${data.statusText}`)};
//         dispatch(actions.addItemsSuccess(result));
//     }catch(error){
//         dispatch(actions.addItemsError(error.message));
//     }
// };
// return func;
// };

// export const removeItem = (id) => {
// const func = async (dispatch) => {
//     try{
//         dispatch(actions.removeItemsLoading());
//         await api.removeItemApi(id);
//         dispatch(actions.removeItemsSuccess(id));
//     }catch(error){
//         dispatch(actions.removeItemsError(error.message));
//     }
// };
// return func;
// }
