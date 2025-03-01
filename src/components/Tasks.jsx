const Tasks = (props) => {
  console.log(props)
  return (
    <div className="flex flex-col bg-slate-300 p-4 rounded-lg">
      {props.tasks.map(task => {
        return (
          <div key={task.id} className="bg-transparent p-4 grid grid-cols-5 gap-5">
            <p className="text-white bg-slate-400 p-3 rounded-lg col-span-4 text-center flex justify-center items-center">{task.title}</p>
            <button className="bg-slate-400 p-3 rounded-lg col-span-1 w-14 h-14 flex justify-center items-center" onClick={() => {
              
            }}>&gt;</button>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
