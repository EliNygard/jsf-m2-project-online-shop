import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], cartTotal: 0, cartQuantity: 0 };

export const cartSlice = createSlice({
  //
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      // Extract the product from the action payload
      const product = action.payload;

      // Try to find an existing product with the same id
      const existingProduct = state.products.find((p) => p.id === product.id);

      if (existingProduct) {
        // If found, increment the Quantity
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      } else {
        // If not found, add the product with an initial quantity of 1
        state.products.push({ ...product, quantity: 1 });
      }

      // Recalculate the cart total by summing the cost of all products
      state.cartTotal = state.products.reduce(
        (total, p) => total + p.price * p.quantity,
        0
      );

      // Recalculate the cart quantity by summing the quantity of all products
      state.cartQuantity = state.products.reduce(
        (total, p) => total + p.quantity,
        0
      );

      console.log("Current products in cart: ", state.products);
      console.log("Updated cart total: ", state.cartTotal);
      console.log("Total quantity of products in cart: ", state.cartQuantity);
    },
    removeProduct: () => {
      //
    },
    clearCart: (state) => {
      state.products = initialState.products;
      state.cartTotal = initialState.cartTotal;
      state.cartQuantity = initialState.cartQuantity;
    },
  },
});

export const { addProduct, removeProduct, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
