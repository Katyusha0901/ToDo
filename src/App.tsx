import React from "react";
import { useRef } from "react";
import { AddTask } from "./AddTask/AddTask";
import { TaskDisplay } from "./Task/TaskDisplay";
import { TaskEditing } from "./Task/TaskEditing";
import { DeleteAllTasks } from "./DeleteAll/DeleteAllTasks";
import "./App.css";
import { useState } from "react";

export interface Task {
  id: number;
  text: string;
  done: boolean;
  isEditing: boolean;
  isCheked: boolean;
}

export default function App() {
  const nextId = useRef(1);
  const [tasks, setTasks] = useState<Task[]>([
    { id: 0, text: "sport", done: true, isEditing: false, isCheked:true },
  ]);

  function addTask(text: string) {
    setTasks([
      ...tasks,
      { id: nextId.current, text: text, done: false, isEditing: false, isCheked:true },
    ]);
    nextId.current = nextId.current + 1;
  }

  function changeTask(task: Task) {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  }

  function deleteTask(taskId: number) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  function deleteAll() {
    setTasks([]);
  }

  return (
    <div className="app">
      <div className="app__app-content">
        <DeleteAllTasks tasks={tasks} onDeleteAll={deleteAll} />
        <AddTask onAddTask={addTask} />
        <ul className="app__task-list">
          {tasks
            .sort((a, b) => {
              return b.done === a.done ? 0 : b.done ? -1 : 1;
            })
            .map((task) =>
              task.isEditing ? (
                <TaskEditing key={task.id} task={task} onChange={changeTask} />
              ) : (
                <TaskDisplay
                  key={task.id}
                  task={task}
                  onChange={changeTask}
                  onDelete={deleteTask}
                />
              )
            )}
        </ul>
      </div>
    </div>
  );
}
