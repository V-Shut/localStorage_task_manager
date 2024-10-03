import "./style.css";

export const Task = ({ data, deleteTask, changeStatus }) => {
  const { name, value } = data;
  const parsedValue = JSON.parse(value);

  function hideElement(id) {
    const taskElement = document.getElementById(name);
    taskElement.classList.add("invisible");

    setTimeout(() => {
      deleteTask(name);
    }, 300);
  }

  return (
    <div className="task" id={name}>
      <div className="status">
        <img
          src={`img/${parsedValue.status ? "done" : "inprogress"}.png`}
          alt="status"
          className="status_icon"
          onClick={() => changeStatus(name)}
        />
      </div>
      <p className="text">{parsedValue.text}</p>
      <div className="delete">
        <img
          src="img/remove.png"
          alt="delete button"
          className="delete_icon"
          onClick={() => hideElement(name)}
        />
      </div>
    </div>
  );
};
