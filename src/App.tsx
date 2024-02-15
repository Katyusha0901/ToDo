import React from "react";
import { AddTask } from "./AddTask/AddTask";
// import { TaskChangeAndDelete } from "./Task/TaskChangeAndDelete";
// import { TaskDelete } from "./Task/TaskDelete";
import { TaskNotEditing } from "./Task/TaskNotEditing";
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
  const [tasks, settasks] = useState([
    { id: 0, text: "sport", done: true, isEditing: false },
  ]);
  const [nextId, setNextId] = useState(1);

  function addTask(text: string) {
    settasks([
      ...tasks,
      { id: nextId, text: text, done: false, isEditing: false },
    ]);
    setNextId(nextId + 1);
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

  // interface Props {
  //   tasks: { id: number; text: string; done: boolean }[];
  //   onChangeTask: Function;
  //   onDeleteTask: Function;
  // }

  return (
    <div className="allApp">
      <div className="allApp__app">
        <DeleteAllTask tasks={tasks} onDeleteAll={deleteAll} />
        <AddTask onAddTask={addTask} />
        <ul className="allApp__taskList">
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
