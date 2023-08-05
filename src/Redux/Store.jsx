import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import productReducer from "./ProductSlice";

const store=configureStore({
    reducer:{
        cart:CartReducer,
        product:productReducer,
    }
});

export default store;