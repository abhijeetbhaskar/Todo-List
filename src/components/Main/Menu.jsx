import Form from "./Menu/Form";

export default function Menu(props) {
  return (
    <section>
      <Form addTask={props.addTask} tasks={props.tasks} />
      <div>
        <button onClick={props.showAll}>Show All</button>
        <button onClick={props.showActive}>show active</button>
        <button onClick={props.showCompleted}>show completed</button>
      </div>
    </section>
  );
}
