import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const item = state.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    remove: (state, action) => {
      const itemIndex = state.findIndex((product) => product.id === action.payload);
      if (itemIndex !== -1) {
        if (state[itemIndex].quantity > 1) {
          state[itemIndex].quantity -= 1;
        } else {
          state.splice(itemIndex, 1); // remove item if quantity is 1
        }
      }
    },

    removeCompletely: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    }
  },
});

export const { add, remove, removeCompletely } = CartSlice.actions;
export default CartSlice.reducer;
