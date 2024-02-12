import { useState } from "react";

export default function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            console.log("click");
            onchange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        <p onClick={() => setIsEditing(true)}> {task.text} </p>
      </>
    );
  }
  return (
    <label className="taskItem">
      <input type="checkbox" checked={task.done} />
      {taskContent}
    </label>
  );
}
