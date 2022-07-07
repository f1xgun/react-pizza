import { createSlice } from "@reduxjs/toolkit/dist/createSlice";

const initialState = {
  value: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {

  }
})

export const {} = filterSlice.actions;

export default filterSlice.reducer;