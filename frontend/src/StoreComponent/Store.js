// store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './SliceFolder/ModalSlice';
import AuthSlice from './SliceFolder/AuthSlice'
const store = configureStore({
  reducer: {
    modal: modalReducer,
    auth:AuthSlice,

  },
});

export default store;
