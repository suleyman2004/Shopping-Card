import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addToCard(state, action) {
      state.push(action.payload);
    },
    removeFromCard(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCard, removeFromCard } = cardSlice.actions;
export default cardSlice.reducer;
