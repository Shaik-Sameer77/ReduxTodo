import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [
    {
      title: 'Grab some Pizza',
      completed: true,
    },
    {
      title: 'Do your workout',
      completed: true,
    },
    {
      title: 'Hangout with friends',
      completed: false,
    },
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    completeTask: (state, action) => {
      const index = action.payload;
      state[index].completed = true;
    },
    removeTask: (state, action) => {
      const index = action.payload;
      state.splice(index, 1);
    },
  },
});

export const { addTask, completeTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
