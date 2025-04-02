import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('cart')) || [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const exists = state.find(item => item.id === action.payload.id)
            if (exists) {
                exists.quantity += 1;
            } else {
                state.push({...action.payload, quantity: 1})
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            return state.map((item) => item.id === action.id ? {...item, quantity: action.quantity} : item)
        },
        clearCart: (state) => {
            return []
        }
    }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;