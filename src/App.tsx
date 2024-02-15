import React from "react";
import { AddTask } from "./Task/AddTask";
import { TaskList } from "./Task/TaskList";
import { DeleteAllTask } from "./Task/DeleteAllTask";
import "./App.css";

import { useState } from "react";

export default function App() {
  const [tasks, settasks] = useState([{ id: 0, text: "sport", done: true }]);
  const [nextId, setNextId] = useState(1);

  function addTask(text: string) {
    settasks([...tasks, { id: nextId, text: text, done: false }]);
    setNextId(nextId + 1);
  }

  function changeTask(task: { id: number; text: string; done: boolean }) {
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

  function deleteTask(taskId: number) {
    settasks(tasks.filter((t) => t.id !== taskId));
  }

  function deleteAll(tasks: []) {
    const newArray = tasks.slice();
    newArray.splice(0, newArray.length);
    settasks(newArray);
  }

  return (
    <div className="allApp">
      <div className="allApp__app">
        <DeleteAllTask tasks={tasks} onDeleteAll={deleteAll} />
        <AddTask onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onChangeTask={changeTask}
          onDeleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
