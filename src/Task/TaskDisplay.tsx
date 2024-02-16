import React from "react";
import { Task } from "../App";
import { useState } from "react";
import "./TaskDisplay.css";

interface Props {
  task: Task;
  onChange: (task: Task) => void;
  onDelete: (number: number) => void;
}

export const TaskDisplay: React.FC<Props> = ({ task, onChange, onDelete }) => (
  <div className="task-display">
    <div
      className="task-display__checkbox"
      onClick={() => {
        onChange({ ...task, isCheked: !task.isCheked });
      }}
    >
      {task.isCheked ? "✔" : null}
    </div>

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
