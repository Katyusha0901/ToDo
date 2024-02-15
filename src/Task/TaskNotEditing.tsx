import "./TaskChangeAndDelete.css";

interface Props {
  task: { id: number; text: string; done: boolean; isEditing: boolean };
  onChange: Function;
  onDelete: Function;
}

export const TaskNotEditing: React.FC<Props> = ({
  task,
  onChange,
  onDelete,
}) => {
  return (
    <>
      <li className="allApp__li" key={task.id}>
        <div className="taskItem">
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
          <p
            className="taskItem__pTask"
            onClick={() => {
              onChange({ ...task, isEditing: true });
            }}
          >
            {" "}
            {task.text}{" "}
          </p>
          <button
            className="button taskItem__button"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};
