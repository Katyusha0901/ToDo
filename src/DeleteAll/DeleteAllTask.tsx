import "./DeleteAllTask.css";

interface Props {
  tasks: { id: number; text: string; done: boolean }[];
  onDeleteAll: Function;
}

export const DeleteAllTask: React.FC<Props> = ({ tasks, onDeleteAll }) => {
  return (
    <>
      <div className="allApp__DeleteButton">
        <button
          onClick={() => onDeleteAll(tasks)}
          className="allApp__buttonDeleteAll allApp__deleteAll"
        >
          Delete All
        </button>
      </div>
    </>
  );
};
