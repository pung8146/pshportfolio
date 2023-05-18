// store.js
import { configureStore } from '@reduxjs/toolkit';
import characterReducer from '../components/Character/characterSlice';

export default configureStore({
  reducer: {
    character: characterReducer
  },
});
