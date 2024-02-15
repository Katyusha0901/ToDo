import React from "react";
import { AddTask } from "./Task/AddTask";
import { TaskList } from "./Task/TaskList";
import { DeleteAllTask } from "./Task/DeleteAllTask";
import "./App.css";

import { useState } from "react";

export default function App() {
  const [tasks, settasks] = useState([{ id: 0, text: "sport", done: true }]);
  const [nextId, setNextId] = useState(1);

  function handleAddTask(text: string) {
    settasks([...tasks, { id: nextId, text: text, done: false }]);
    setNextId(nextId + 1);
  }

  function handleChangeTask(task: { id: number; text: string; done: boolean }) {
    settasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    settasks(tasks.filter((t) => t.id !== taskId));
  }

  function handleDeleteAll(tasks: []) {
    const newArray = tasks.slice();
    newArray.splice(0, newArray.length);
    settasks(newArray);
  }

  return (
    <div className="allApp">
      <div className="allApp__app">
        <DeleteAllTask tasks={tasks} onDeleteAll={handleDeleteAll} />
        <AddTask onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={handleChangeTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
