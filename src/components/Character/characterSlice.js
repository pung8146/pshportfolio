// characterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const characterSlice = createSlice({
  name: 'character',
  initialState: { isScrolling: false },
  reducers: {
    startScrolling: state => {
      state.isScrolling = true;
    },
    stopScrolling: state => {
      state.isScrolling = false;
    },
  },
});

export const { startScrolling, stopScrolling } = characterSlice.actions;

export default characterSlice.reducer;
