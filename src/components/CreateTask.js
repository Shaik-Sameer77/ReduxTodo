import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice';

function CreateTask() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;
    dispatch(addTask({ title, completed: false }));
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={title}
        placeholder="Add a new task"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className="submitbtn">Add Task</button>
    </form>
  );
}

export default CreateTask;