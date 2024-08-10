import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    fetchContacts: (state, action) => {
      return action.payload;
    },
    addContact: (state, action) => {
      state.push(action.payload);
    },
    updateContact: (state, action) => {
      const index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    deleteContact: (state, action) => {
      return state.filter((contact) => contact.id !== action.payload);
    },
  },
});

export const { fetchContacts, addContact, updateContact, deleteContact } =
  contactSlice.actions;

export const contactReducer = contactSlice.reducer;

export const contactSelector = (state) => state.contactReducer;



