import { createSlice } from "@reduxjs/toolkit";

//iterate over products by index return index the both ids are same else return -1
const findIndex = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return i
        }
    }
    return -1
}
const cartSlice = createSlice({
    name: "cart",   //name of slice
    initialState: [],   //initialState of cart is empty 
    reducers: {
        // Functionality for save all products and send it as a action payload 
        // after save the initial state is changed into products length
        saveAllBlogs: (state, action) => {
            return action.payload;
        },
        //Functionality for add cart count
        addCartCount: (state, action) => {
            const { id } = action.payload;
            const index = findIndex(state, id);
            if (index !== -1) {
                state[index] = {
                    ...state[index],
                    quantity: (state[index].quantity || 1) + 1,
                }
            }
        },
        //Functionality for decrease cart count
        decreaseCartCount: (state, action) => {
            const { id } = action.payload;
            const index = findIndex(state, id);

            if (index !== -1 && state[index].quantity > 1) {
                state[index] = {
                    ...state[index],
                    quantity: state[index].quantity - 1
                };
            }
        },
        //Functionality for remove cart
        deleteProduct: (state, action) => {
            const { id } = action.payload;
            return state.filter(product => product.id !== id);
        },
    },
})
//export all the Functionalities destructured as slice actions
export const { saveAllBlogs, addCartCount, decreaseCartCount, deleteProduct } = cartSlice.actions
export default cartSlice.reducer    