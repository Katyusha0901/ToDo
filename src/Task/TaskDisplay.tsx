import "./Task.css";

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
      <li className="app__item-content" key={task.id}>
        <div className="app__task-item">
          <label className="checkbox">
            <input
              className=" checkbox__input"
              type="checkbox"
              checked={task.done}
              onChange={(e) => {
                onChange({ ...task, done: e.target.checked });
              }}
            />
            <span className="checkbox__checkmark">✔</span>
          </label>
          <p
            className="task-item__p-task"
            onClick={() => {
              onChange({ ...task, isEditing: true });
            }}
          >
            {" "}
            {task.text}{" "}
          </p>
          <button
            className="task-item__button"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
};
