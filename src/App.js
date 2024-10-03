import { useEffect, useState } from "react";
import "./App.css";
import { Input } from "./components/input";
import { Task } from "./components/task";

function App() {
  const [storage, setStorage] = useState([]);
  const [storageLength, setStorageLength] = useState(0);

  function getAllLocalStorageData() {
    const allData = [];

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      allData.push({ name: key, value: value });
    }

    allData.sort((a, b) => Number(a.name) - Number(b.name));

    setStorage(allData);
    setStorageLength(allData.length);
  }

  function deleteTask(id) {
    localStorage.removeItem(id);
    setStorageLength(localStorage.length);
  }

  function changeStatus(id) {
    setStorageLength(localStorage.length - 1);
    let changedData = localStorage.getItem(id);
    changedData = JSON.parse(changedData);
    changedData.status = !changedData.status;
    localStorage.setItem(id, JSON.stringify(changedData));
    setStorageLength(localStorage.length + 1);
  }

  useEffect(() => {
    getAllLocalStorageData();
  }, []);

  useEffect(() => {
    getAllLocalStorageData();
  }, [storageLength]);

  return (
    <div className="App">
      <Input setStorageLength={setStorageLength} />
      {!!storage.length ? (
        storage.map((data) => (
          <Task
            key={data.name}
            data={data}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
          />
        ))
      ) : (
        <div className="no_tasks">No tasks today</div>
      )}
    </div>
  );
}

export default App;
