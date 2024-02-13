import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <div className="addTask">
        <input
          placeholder="Add task"
          className="addTask__inputTask"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="button addTask__buttonAdd"
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
