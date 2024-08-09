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

// Updated the selector to return the entire state since it's an array
export const contactSelector = (state) => state.contactReducer;

// const initialState = [];

// const contactReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "FETCH_CONTACTS":
//       return action.payload;
//     case "ADD_CONTACT":
//       return [...state, action.payload];
//     case "UPDATE_CONTACT":
//       const updateState = state.map((contact) =>
//         contact.id === action.payload.id ? action.payload : contact
//       );
//       state = updateState;
//       return state;
//     case "DELETE_CONTACT":
//       const filterContacts = state.filter(
//         (contact) => contact.id !== action.payload && contact
//       );
//       return filterContacts;
//     default:
//       return state;
//   }
// };

// export default contactReducer;
