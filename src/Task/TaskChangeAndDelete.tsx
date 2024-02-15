import { useState } from "react";

interface Props {
  task: { id: number; text: string; done: boolean };
  onChange: Function;
  onDelete: Function;
}

export const TaskChangeAndDelete: React.FC<Props> = ({
  task,
  onChange,
  onDelete,
}) => {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <div></div>
        <input
          className="input taskItem__inputTaskText"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="button taskItem__button"
          onClick={() => setIsEditing(false)}
        >
          ✔
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <label className="checkbox">
          <input
            className="input checkbox__input"
            type="checkbox"
            checked={task.done}
            onChange={(e) => {
              onChange({ ...task, done: e.target.checked });
            }}
          />
          <span className="checkbox__checkmark">✔</span>
        </label>
        <p className="taskItem__pTask" onClick={() => setIsEditing(true)}>
          {" "}
          {task.text}{" "}
        </p>
        <button
          className="button taskItem__button"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </>
    );
  }

  return <div className="taskItem">{taskContent}</div>;
};
