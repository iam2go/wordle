import { configureStore } from '@reduxjs/toolkit';
import { wordleReducer } from './slice';

export const store = configureStore({ reducer: wordleReducer});
