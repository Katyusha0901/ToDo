export default function DeleteAll({ tasks, onDeleteAll }) {
  return (
    <>
      <div className="DeleteButton">
        <button onClick={() => onDeleteAll(tasks)} className="deleteAll">
          Delete All
        </button>
      </div>
    </>
  );
}
