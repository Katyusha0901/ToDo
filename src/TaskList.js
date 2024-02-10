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
  //   const [isEditing, setIsEditing] = useState(false);
  return (
    <label>
      <input type="checkbox" checked={task.done} />
      {task.text}
    </label>
  );
}
