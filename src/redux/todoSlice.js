import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  currentTodo: null,

  isEdit: false,
};

export const selectTodos = state => state.todoSlice.items;

const slice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    editTodo: (state, action) => {
      state.items = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item,
      );
    },

    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
      console.log('CurrentTodo:', state.currentTodo);
    },
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, editTodo, setIsEdit, setCurrentTodo } =
  slice.actions;
