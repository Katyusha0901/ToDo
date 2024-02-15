import "./Task.css";

interface Props {
  task: { id: number; text: string; done: boolean };
  onChange: Function;
}

export const TaskEditing: React.FC<Props> = ({ task, onChange }) => {
  return (
    <>
      <div className="app__task-item">
        <div></div>
        <input
          className=" task-item__input-task-text"
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          className="button task-item__button"
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
