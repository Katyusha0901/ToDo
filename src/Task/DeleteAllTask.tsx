interface Props {
  tasks: { id: number; text: string; done: boolean }[];
  onDeleteAll: Function;
}


export const DeleteAllTask: React.FC<Props> = ({tasks, onDeleteAll })=> {
    return (
      <>
        <div className="DeleteButton">
          <button onClick={() => onDeleteAll(tasks)} className="buttonDeleteAll deleteAll">
            Delete All
          </button>
        </div>
      </>
    );
  }
  