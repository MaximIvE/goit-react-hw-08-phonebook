import { getItems } from "shared/api/itemsApi";
import { fetchItemsLoading, fetchItemsSuccess, fetchItemsError } from "./items-actions";

//Створюємо операцію
export const fetchItems = () => {
 const func = async (dispatch) => {
    try{
        dispatch(fetchItemsLoading());
        const data = await getItems();
        // console.log("data", data);
        // if ( data.status !== 200){ throw new Error (`${data.status} | ${data.statusText}`)};
        dispatch(fetchItemsSuccess(data));
    }catch(error){
        dispatch(fetchItemsError(error.message));
    }
 };
 return func;

}