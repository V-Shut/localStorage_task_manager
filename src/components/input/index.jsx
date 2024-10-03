import { useState } from "react";
import "./style.css";

export const Input = ({ setStorageLength }) => {
  const [value, setValue] = useState("");

  const addNewTask = (event) => {
    if (event.key !== "Enter") {
      return;
    }

    if (!value) {
      return;
    }

    const task = {
      text: null,
      status: false,
    };

    task.text = value;
    const id = Math.floor(Date.now() / 1000);

    localStorage.setItem(id.toString(), JSON.stringify(task));
    setValue("");
    setStorageLength(localStorage.length);
  };

  return (
    <div className="container">
      <input
        className="input"
        type="text"
        placeholder="Enter your task"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={addNewTask}
      />
      {!!value.length && <img src="img/clear.png" alt="" className="clear" onClick={() => setValue('')} />}
    </div>
  );
};
