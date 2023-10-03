import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { addContact } from "./redux/Feature/contactSlice";
const initialData = localStorage.getItem("formData");
if (initialData) {
  store.dispatch(addContact(initialData));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
