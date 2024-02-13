import { useState } from "react";

export default function TaskChangeAndDelete({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className="taskItem__inputTaskText"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button className="button taskItem__button" onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <label className="checkbox">
          <input
            className="checkbox__input"
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onChange({ ...task, done: e.target.checked });
            }}
          />
          <span className="checkbox__checkmark">✔</span>
        </label>{" "}
        <p className="pTask" onClick={() => setIsEditing(true)}>
          {" "}
          {task.text}{" "}
        </p>
      </>
    );
  }

  return (
    <label className="taskItem">
      {taskContent}
      <button className="button taskItem__buttonDelete" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </label>
  );
}
