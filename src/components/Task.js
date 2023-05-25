import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTask, removeTask } from '../store/taskSlice';

function Task({ task, index }) {
  const dispatch = useDispatch();

  const handleCompleteTask = () => {
    dispatch(completeTask(index));
  };

  const handleRemoveTask = () => {
    dispatch(removeTask(index));
  };

  return (
    <div
      className="task"
      style={{ textDecoration: task.completed ? 'line-through' : '' }}
    >
      {task.title}

      <button style={{ background: 'red' }} onClick={handleRemoveTask}>
        x
      </button>
      <button onClick={handleCompleteTask}>Complete</button>
    </div>
  );
}

export default Task;
