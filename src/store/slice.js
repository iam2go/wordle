import { createSlice } from '@reduxjs/toolkit';

export const wordSelector = (state) => state.word;

// 초기 state
const initialState = {
    word: ""
};

// slice
const wordle = createSlice({
  name: 'wordle',
  initialState,
  reducers: {
      changeWord: (state, action) => {
          state.word = action.payload;
      }
  }
});

export const { changeWord } = wordle.actions;
export const wordleReducer = wordle.reducer;