// import { combineReducers } from '@reduxjs/toolkit';
// import { filterReducer } from './filterSlice';
// import { itemsReducer } from './itemsSlice';

// const contactsReducer = combineReducers({
//   items: itemsReducer,
//   filter: filterReducer,
// });

// export default contactsReducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, { payload }) {
      state.items = [...state.items, payload];
    },
    addContactsFromLS(state, { payload }) {
      state.items = payload;
    },
    deleteContact(state, { payload }) {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const contactsActions = contactsSlice.actions;
