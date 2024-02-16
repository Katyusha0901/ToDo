import "./TaskEditing.css";
import { Task } from "../App";

interface Props {
  task: Task;
  onChange: (task: Task) => void;
}

export const TaskEditing: React.FC<Props> = ({ task, onChange }) => {
  return (
    <>
      <div className="task-item">
        <div></div>
        <input
          className="task-item__input-task-text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onChange({ ...task, isEditing: false });
            }
          }}
        />
        <button
          className="task-item__button"
          onClick={() => {
            onChange({ ...task, isEditing: false });
          }}
        >
          ✔
        </button>
      </div>
    </>
  );
};
