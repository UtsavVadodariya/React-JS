
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [],
        filteredItems: [],
        categories: [],
        loading: true,
    },
    reducers: {
        filterByCategory: (state, action) => {
            state.filteredItems = state.items.filter(
                (product) => product.category === action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
                state.filteredItems = action.payload;

                const categories = action.payload.map((item) => item.category);
                state.categories = [...new Set(categories)];
            });
    },
});

export const { filterByCategory } = productsSlice.actions;
export default productsSlice.reducer;
