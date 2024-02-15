import React from "react";
import { useRef } from "react";
import { AddTask } from "./AddTask/AddTask";
import { TaskNotEditing } from "./Task/TaskDisplay";
import { TaskEditing } from "./Task/TaskEditing";
import { DeleteAllTask } from "./DeleteAll/DeleteAllTask";
import "./App.css";
import { useState } from "react";

export interface Task {
  id: number;
  text: string;
  done: boolean;
  isEditing: boolean;
}

export default function App() {
  const nextId = useRef(1);
  const [tasks, settasks] = useState<Task[]>([
    { id: 0, text: "sport", done: true, isEditing: false },
  ]);

  function addTask(text: string) {
    settasks([
      ...tasks,
      { id: nextId.current, text: text, done: false, isEditing: false },
    ]);
    nextId.current = nextId.current + 1;
  }

  function changeTask(task: Task) {
    settasks(
      tasks.map((t) => {
        return t.id === task.id ? task : t;
      })
    );
  }

  function deleteTask(taskId: number) {
    settasks(tasks.filter((t) => t.id !== taskId));
  }

  function deleteAll() {
    settasks([]);
  }

  return (
    <div className="app">
      <div className="app__app-content">
        <DeleteAllTask tasks={tasks} onDeleteAll={deleteAll} />
        <AddTask onAddTask={addTask} />
        <ul className="app__task-list">
          {tasks
            .sort((a, b) => {
              return b.done === a.done ? 0 : b.done ? -1 : 1;
            })
            .map((task) =>
              task.isEditing === false ? (
                <TaskNotEditing
                  task={task}
                  onChange={changeTask}
                  onDelete={deleteTask}
                />
              ) : (
                <TaskEditing task={task} onChange={changeTask} />
              )
            )}
        </ul>
      </div>
    </div>
  );
}
