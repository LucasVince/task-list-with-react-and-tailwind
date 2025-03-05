import { ChevronRightIcon } from "lucide-react";
import { CircleX } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tasks = (props) => {
  const navigate = useNavigate();

  const onTaskDetailsClick = (task) => {
    navigate(`/details?title=${task.title}&description=${task.description}&completed=${task.completed}`);
  }

  return (
    <div className="flex flex-col bg-slate-300 p-4 rounded-lg">
      {props.tasks.map(task => {
        return (
          <div key={task.id} className="bg-transparent p-4 flex items-center gap-4">
            <p className={`text-white bg-slate-400 p-2 rounded-lg text-center w-full cursor-pointer flex hover:bg-slate-500 ${task.completed ? 'line-through' : null}`} onClick={
              () => props.onTaskClick(task.id)
              }>
                {task.title}
              </p>

            <button className="text-white bg-slate-400 p-2 rounded-lg text-center w-10 h-10 flex justify-center items-center hover:bg-slate-500" onClick={
              () => onTaskDetailsClick(task)
            }>
              <ChevronRightIcon />
            </button>

            <button className="text-white bg-slate-400 p-2 rounded-lg text-center w-10 h-10 flex justify-center items-center hover:bg-slate-500" onClick={
              () => props.onDelete(task.id)
              }>
            <CircleX />
            </button>

          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
