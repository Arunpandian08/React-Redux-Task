import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; //import cartSlice as cardReducer


export default configureStore({
    reducer:{
        cartData : cartReducer //export configureStore and declared cardReducer as cartData 
    }
})