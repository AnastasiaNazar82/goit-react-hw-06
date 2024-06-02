import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: { nane: "" },
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default filtersSlice.reducer;
export const { changeFilter } = filtersSlice.actions;

export const selectNameFilter = (state) => {
  return state.filters.name;
};
