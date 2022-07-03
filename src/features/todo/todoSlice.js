import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [{
    title: "11111111111111111",
    id: "ssssssssssss",
    completed: false
  }],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.value = [
        ...state.value,
        {
          title: action.payload,
          id: Date.now(),
          completed: false
        }
      ]
    },
    removeTodo: (state, action) => {
      const filtered = state.value.filter((todo) => {
        return todo.id !== action.payload;
      })
      state.value = filtered
    },
    toggleTodo: (state, action) => {
      state.value = state.value.map((todo) => {
        if (action.payload === todo.id) {
          todo.completed = !todo.completed
        }
        return todo
      })



      console.log(action.payload, 'action.payload')
    },
  }
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export const selectTodo = (state) => state.todo.value;

export default todoSlice.reducer;
