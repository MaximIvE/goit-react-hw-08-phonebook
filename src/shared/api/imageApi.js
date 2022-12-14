// import axios from "axios";

// const instance = axios.create({
//     baseURL: "https://pixabay.com/api/?key=28160645-02600786ca706ffa5b60b520e&q=backgrounds&image_type=photo",
// });

// export const imageApi = async () => {
//     const {data} = await instance.get("/");
//     return data;
// };

export function imageApi(){
    const URL = "https://pixabay.com/api/?key=28160645-02600786ca706ffa5b60b520e&q=backgrounds&image_type=photo";
    return fetch(URL)
        .then(res=>{
            if(!res.ok){ throw new Error (res.status)};
            return res.json();
        }).catch(error=> {
            error.message="Щось пішло не так";
            alert(error.message)});
}