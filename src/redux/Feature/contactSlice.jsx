import { createSlice } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contacts: [
      {
        id: 1,
        name: "Saurabh Bisht",
        email: "mayankkumar@gmail.com",
        phone: "+91767656526",
        status: "Active",
      },
      {
        id: 2,
        name: "Jitender Kumar",
        email: "jitenderskumar@gmail.com",
        phone: "+918878446746",
        status: "Inactive",
      },
      {
        id: 3,
        name: "Pankaj Bisht",
        email: "jamesgun@gmail.com",
        phone: "+919768446746",
        status: "Active",
      },
    ],

    contact: {},
  },
  reducers: {
    getContact: (id) => {
      // find from the original and set sinlge item to the new contact
    },

    addContact: (state, action) => {
      const newData = { ...action.payload, id: state.contacts.length + 1 };
      state.contacts = [newData, ...state.contacts];
      localStorage.setItem(newData, action.payload);
    },

    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(
        (item) => item.id !== action.payload
      );
    },

    updateContact: (state, action) => {
      state.contacts = state.contacts.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;

export default contactSlice.reducer;
