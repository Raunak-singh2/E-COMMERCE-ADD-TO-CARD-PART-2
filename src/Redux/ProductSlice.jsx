import { createSlice} from "@reduxjs/toolkit";
 
export const STATUSES=Object.freeze({
    SUCCESS:'success',
    ERROE:'error',
    LOADING:'loading',
})

const peoductSlice=createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUSES.SUCCESS,
    },
    reducers:{
        setProduct(state,action){
           state.data=action.payload;
        },
        setStatus(state,action){
            state.status=action.payload;
        }
    }
    
});


export const {setProduct,setStatus}=peoductSlice.actions;
export default peoductSlice.reducer;


// middleware


export function fetchproduct(){
    return async function fetchproductThunk(dispathch){
        dispathch(setStatus(STATUSES.LOADING));

        try {
            const res=await fetch("https://fakestoreapi.com/products");
            const data=await res.json();
            dispathch(setProduct(data));
            dispathch(setStatus(STATUSES.SUCCESS));

        } catch (error) {
            console.log(error)
            dispathch(setStatus(STATUSES.ERROE));
            
        }
    }
}