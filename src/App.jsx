import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Task 1",
    description: "Description 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    completed: false,
  },
]);
  return (
    <div className="w-screen h-screen bg-slate-500 text-white flex justify-center items-center flex-col">
      <div className="w-[500px]">
        <h1 className="text-3xl text-center font-bold">Task List</h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
};

export default App;
