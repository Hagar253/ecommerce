import { configureStore } from "@reduxjs/toolkit"; //to combine the slices into a single store
import productReducer from "./Features/productSlice";
import categoryReducer from "./Features/categorySlice";
import cartReducer from "./Features/cartSlice";
import sidebarReducer from "./Features/sidebarSlice";
import searchReducer from "./Features/searchSlice"

export const makeStore = () => {
    return configureStore({
        reducer: {
            product: productReducer,
            category: categoryReducer,
            cart: cartReducer,
            sidebar: sidebarReducer,
            category: categoryReducer,
            search: searchReducer
        }

    })
}