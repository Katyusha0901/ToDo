import "./DeleteAllTask.css";
import { Task } from "../App";

interface Props {
  tasks: Task[];
  onDeleteAll: (x: Task[]) => void;
}

export const DeleteAllTask: React.FC<Props> = ({ tasks, onDeleteAll }) => {
  return (
    <>
      <div className="app__delete-button">
        <button
          onClick={() => onDeleteAll(tasks)}
          className="app__button-delete-all app__delete-all"
        >
          Delete All
        </button>
      </div>
    </>
  );
};
