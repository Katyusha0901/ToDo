import { useState } from "react";
import "./AddTask.css";

interface Props {
  onAddTask: (x: string) => void;
}

export const AddTask: React.FC<Props> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="add-task">
        <input
          placeholder="Add task"
          className=" add-task__input-task"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && text.length >= 1) {
              setText("");
              onAddTask(text);
            }
          }}
        />
        <button
          className=" add-task__button-add"
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
};
