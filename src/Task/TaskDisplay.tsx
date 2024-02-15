import React from "react";
import { Task } from "../App";

import "./Task.css";

interface Props {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (x: number) => void;
}

export const TaskNotEditing: React.FC<Props> = ({
  task,
  onChange,
  onDelete,
}) => {
  return (
    <>
      <li className="app__item-content" key={task.id}>
        <div className="app__task-item">
          <label className="checkbox">
            <input
              className=" checkbox__input"
              type="checkbox"
              checked={task.done}
              onChange={(e) => {
                onChange({ ...task, done: e.target.checked });
              }}
            />
            <span className="checkbox__checkmark">✔</span>
          </label>
          <p
            className="task-item__p-task"
            onClick={() => {
              onChange({ ...task, isEditing: true });
            }}
          >
            {" "}
            {task.text}{" "}
          </p>
          <button
            className="task-item__button"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};
