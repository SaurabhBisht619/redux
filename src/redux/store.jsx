import { configureStore } from "@reduxjs/toolkit";
import ContactReducer from "./Feature/contactSlice";

export default configureStore({
  reducer: {
    contact: ContactReducer,
  },
});


// prodcut slice 
// intial page load (all product) - extra reducer
// create action