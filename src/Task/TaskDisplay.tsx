import React from "react";
import { Task } from "../App";
import "./TaskDisplay.css";

interface Props {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (number: number) => void;
}

export const TaskDisplay: React.FC<Props> = ({ task, onChange, onDelete }) => (
  <div className="task-display__task-item">
    <label className="task-display__checkbox">
      <input
        className="task-display__checkbox-input"
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChange({ ...task, done: e.target.checked });
        }}
      />
      <span className="task-display__checkbox-checkmark">✔</span>
    </label>
    <p
      className="task-display__p-task"
      onClick={() => {
        onChange({ ...task, isEditing: true });
      }}
    >
      {task.text}
    </p>
    <button className="task-display__button" onClick={() => onDelete(task.id)}>
      Delete
    </button>
  </div>
);
