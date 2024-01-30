import React, { useState } from "react";

export const TodoInput = () => {

  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([ 'running','exercise'])


  const onHandleChange = (e) => {
    setNewTask(e.target.value);

  }

  const handler = () => {
    if (newTask.trim() !== "") {
    setTasks([...tasks, newTask])
    setNewTask('')
  }}

  const checkEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handler()
    }
  }
  const deleteItem = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="container">
      <div>
        <input type="text"
          onKeyDown={checkEnter}
          placeholder="Enter Todos Here"
          name="todo"
          value={newTask}
          onChange={onHandleChange}
          autoComplete="off"
        />
        <button className="addBtn"
         onClick={handler} >
          Add Todos</button>

        <ul >
          {tasks.map((task, i) =>
            <li key={i}>
              {task}
              <button className="deleteBtn" 
              onClick={deleteItem}>
                Delete
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  )
};



