// store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './SliceFolder/ModalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
