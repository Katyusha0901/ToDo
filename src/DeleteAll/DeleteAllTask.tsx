import "./DeleteAllTask.css";

interface Props {
  tasks: { id: number; text: string; done: boolean }[];
  onDeleteAll: Function;
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
