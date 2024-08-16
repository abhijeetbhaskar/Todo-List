import Tasks from "../Tasks";

export default function TaskShowcase({ tasks, ...props }) {
  const tasksNoun = tasks.length !== 1 ? "tasks" : "task";
  const remainingTasksText = `${tasks.length} ${tasksNoun} remaining`;

  return (
    <section>
      <h2> {remainingTasksText} </h2>
      <ul>
        {tasks.map((item) => (
          <Tasks
            key={item.id}
            newName={props.newName}
            deleteTask={props.deleteTask}
            editTask={props.editTask}
            toggleTaskCompleted={props.toggleTaskCompleted}
            {...item}
          />
        ))}
      </ul>
    </section>
  );
}
