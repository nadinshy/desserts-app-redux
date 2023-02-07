import { createSlice } from "@reduxjs/toolkit";


export const dessertsSlice = createSlice ({
    name: 'desserts',
    initialState: {
        selectedCategory: 'TORTS'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }

    }
})

export const { filterCategory } = dessertsSlice.actions;
export const getSelectedCategory = state => state.desserts.selectedCategory;
export default dessertsSlice.reducer;