import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: {
    items: [],
    currentTodo: null,
  },
  counter: 1,
  isEdit: false,
};

export const selectTodos = state => state.todoSlice.todos.items;

const slice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        ...action.payload,
        counter: state.counter,
      };
      state.todos.items.push(newTodo);
      state.counter += 1;
    },

    deleteTodo: (state, action) => {
      state.todos.items = state.todos.items.filter(
        item => item.id !== action.payload,
      );
    },

    editTodo: (state, action) => {
      state.todos.items = state.todos.items.map(item =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item,
      );
    },

    setIsEdit: (state, action) => {
      state.isEdit = action.payload;
    },
    setCurrentTodo: (state, action) => {
      state.todos.currentTodo = action.payload;
    },
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, editTodo, setIsEdit, setCurrentTodo } =
  slice.actions;
