import React from "react";
import { Task } from "../App";
import "./TaskDisplay.css";

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
      <li className="item-content" key={task.id}>
        <div className="item-content__task-item">
          <label className="item-content__checkbox">
            <input
              className="item-content__checkbox-input"
              type="checkbox"
              checked={task.done}
              onChange={(e) => {
                onChange({ ...task, done: e.target.checked });
              }}
            />
            <span className="item-content__checkbox-checkmark">✔</span>
          </label>
          <p
            className="item-content__p-task"
            onClick={() => {
              onChange({ ...task, isEditing: true });
            }}
          >
            {" "}
            {task.text}{" "}
          </p>
          <button
            className="item-content__button"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};
