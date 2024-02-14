import React from "react";
import { AddTask } from "./Task/AddTask";
import { TaskList } from "./Task/TaskList";
import { DeleteAllTask } from "./Task/DeleteAllTask";
import { useState } from "react";

export default function App() {
  const [initialTasks, setInitialTasks] = useState([
    { id: 0, text: "sport", done: true },
  ]);
  const [nextId, setNextId] = useState(1);

  function handleAddTask(text: string) {
    setInitialTasks([...initialTasks, { id: nextId, text: text, done: false }]);
    setNextId(nextId + 1);
  }

  function handleChangeTask(task: { id: number; text: string; done: boolean }) {
    setInitialTasks(
      initialTasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(taskId: number) {
    setInitialTasks(initialTasks.filter((t) => t.id !== taskId));
  }

  function handleDeleteAll(tasks: []) {
    const newArray = initialTasks.slice();
    newArray.splice(0, newArray.length);
    setInitialTasks(newArray);
  }

  return (
    <div className="allApp">
    <div className="allApp__app">
      <DeleteAllTask tasks={initialTasks} onDeleteAll={handleDeleteAll} />
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={initialTasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
    </div>
  );
}
