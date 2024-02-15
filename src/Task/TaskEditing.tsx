import "./TaskChangeAndDelete.css";
import { TaskNotEditing } from "./TaskNotEditing";

interface Props {
  task: { id: number; text: string; done: boolean };
  onChange: Function;
}

export const TaskEditing: React.FC<Props> = ({ task, onChange }) => {
  return (
    <>
      <div className="taskItem">
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
