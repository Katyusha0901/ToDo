import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <div className="addTask">
        <input
          placeholder="Add task"
          className="inputTask"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="buttonAdd"
          onClick={() => {
            if (text.length >= 1) {
              setText("");
              onAddTask(text);
            }
          }}
        >
          Add Task
        </button>
      </div>
    </>
  );
}
