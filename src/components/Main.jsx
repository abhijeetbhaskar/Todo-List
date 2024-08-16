import { useState } from "react";
import Menu from "./Main/Menu";
import TaskShowcase from "./Main/TaskShowcase";
import { nanoid } from "nanoid";

export default function Main(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("all"); // State to keep track of the current filter

  function addTask(name) {
    const newTask = {
      id: `todo-${nanoid()}`,
      taskName: name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, taskName: newName };
      }
      return task;
    });
    setTasks(editedTaskList);
  }

  function showAll() {
    setFilter("all");
  }

  function showActive() {
    setFilter("active");
  }

  function showCompleted() {
    setFilter("completed");
  }

  function getFilteredTasks() {
    if (filter === "active") {
      return tasks.filter((task) => !task.completed);
    } else if (filter === "completed") {
      return tasks.filter((task) => task.completed);
    } else {
      return tasks; // 'all' or any other filter state
    }
  }

  return (
    <main>
      <Menu
        addTask={addTask}
        tasks={tasks}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
      />
      <TaskShowcase
        tasks={getFilteredTasks()}
        deleteTask={deleteTask}
        editTask={editTask}
        toggleTaskCompleted={toggleTaskCompleted}
      />
    </main>
  );
}
