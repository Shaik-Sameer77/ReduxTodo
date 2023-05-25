import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Task from "./Task";
import CreateTask from "./CreateTask";
import "../Todo.css";

function Todo() {
  const tasks = useSelector((state) => state.tasks);
  const [tasksRemaining, setTasksRemaining] = useState(0);

  useEffect(() => {
    const pendingTasks = tasks.filter((task) => !task.completed);
    setTasksRemaining(pendingTasks.length);
  }, [tasks]);

  return (
    <div className="todo-container">
      <div className="header">Pending tasks ({tasksRemaining})</div>
      <div className="create-task">
        <CreateTask />
      </div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task task={task} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Todo;
