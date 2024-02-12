import React from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import { useState } from "react";

export default function App() {
  const [initialTasks, setInitialTasks] = useState([
    { id: 0, text: "sport", done: true },
  ]);
  const [nextId, setNextId] = useState(1);
  console.log(initialTasks);
  function handleAddTask(text: string) {
    setInitialTasks([...initialTasks, { id: nextId, text: text, done: false }]);
    setNextId(nextId + 1);
    console.log(initialTasks);
    console.log(nextId);
  }

  return (
    <>
      <div className="app">
        <h1 className="title">To-Do List</h1>
        <AddTask onAddTask={handleAddTask} />
        <TaskList tasks={initialTasks} />
      </div>
    </>
  );
}
