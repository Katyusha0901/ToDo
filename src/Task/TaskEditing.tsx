import "./TaskEditing.css";
import { Task } from "../App";

interface Props {
  task: Task;
  onChange: (task: Task) => void;
}

export const TaskEditing: React.FC<Props> = ({ task, onChange }) => (
  <div className="task-editing">
    {/* <div></div> */}
    <input
      className="task-editing__input-task-text"
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
      className="task-editing__button"
      onClick={() => {
        onChange({ ...task, isEditing: false });
      }}
    >
      ✔
    </button>
  </div>
);
