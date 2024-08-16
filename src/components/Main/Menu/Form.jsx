import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
  }
  return (
    <form id="mainForm" onSubmit={handleSubmit}>
      <h2>What needs to be done?</h2>
      <input
        type="text"
        id="new-todo-input"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" id="addTasks">
        Add
      </button>
    </form>
  );
}
