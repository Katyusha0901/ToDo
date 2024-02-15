import { useState } from "react";
interface Props {
  onAddTask: Function;
}

export const AddTask: React.FC<Props> = ({ onAddTask }) => {
  const [text, setText] = useState("");

  return (
    <>
      <div className="addTask">
        <input
          placeholder="Add task"
          className="input addTask__inputTask"
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
};
