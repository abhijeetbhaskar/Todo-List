import "./styles.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { TASKS_DATA } from "./data";

export default function App() {
  return (
    <>
      <Header />
      <Main tasks={TASKS_DATA} />
    </>
  );
}
