import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from '@reduxjs/toolkit';
import { selectTodos } from './todoSlice';

const initialState = {
  filter: '',
};

const slice = createSlice({
  name: 'filterSlice',
  initialState,
  reducers: {
    filterTodo: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    },
  },
});

export const selectFilter = state => state.filterSlice.filter;

export const selectfilteredTodoMemo = createSelector(
  [selectFilter, selectTodos],
  (filter, todos) => {
    return todos.filter(item =>
      item.text.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);

export const filterReducer = slice.reducer;
export const { filterTodo } = slice.actions;
