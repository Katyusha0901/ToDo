import "./DeleteAllTasks.css";
import { Task } from "../App";

interface Props {
  tasks: Task[];
  onDeleteAll: (value: Task[]) => void;
}

export const DeleteAllTasks: React.FC<Props> = ({ tasks, onDeleteAll }) => (
  <div className="delete-button">
    <button
      onClick={() => onDeleteAll(tasks)}
      className="delete-button__button-delete-all delete-button__delete-all"
    >
      Delete All
    </button>
  </div>
);
