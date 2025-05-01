import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

const slice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    filterTodo: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload; // варінт без createSelector()
    },
  },
});

export const filterReducer = slice.reducer;
export const { filterTodo } = slice.actions;
