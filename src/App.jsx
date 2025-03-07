import AddTask from "./components/AddTasks";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";

const App = () => {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const onTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        task.completed = !task.completed;
      }

      return task;
    });

    setTasks(newTasks);    
  }

  const onDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  const onClickAddTask = (title, description) => {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      completed: false,
    }

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 text-white flex justify-center items-center flex-col">
      <div className="w-[500px] flex flex-col gap-5">
        <h1 className="text-3xl text-center font-bold">
          Task List
        </h1>
        <AddTask
          onClickAddTask={onClickAddTask}
        />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default App;
