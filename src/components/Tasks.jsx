import { useState } from "react";

export default function Tasks(props) {
  const [isEditing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.editTask(props.id, newName);
    setNewName("");
    setEditing(false);
  }

  function handleChange(event) {
    setNewName(event.target.value);
  }

  const editingTemplate = (
    <form onSubmit={handleSubmit}>
      <label>New name for {props.taskName}</label>
      <input
        id={props.id}
        type="text"
        autoComplete="off"
        value={newName}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
      <button type="button" onClick={() => setEditing(false)}>
        Cancel
      </button>
    </form>
  );

  const viewTemplate = (
    <div>
      <div>
        <input
          type="checkbox"
          defaultChecked={props.completed}
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label>{props.taskName}</label>
      </div>
      <div>
        <button onClick={() => setEditing(true)}>Edit</button>
        <button onClick={() => props.deleteTask(props.id)}>Delete</button>
      </div>
      <div />
    </div>
  );

  return <li>{isEditing ? editingTemplate : viewTemplate}</li>;
}
