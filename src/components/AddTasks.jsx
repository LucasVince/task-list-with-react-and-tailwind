import { useState } from "react";
import Input from "./Input";

const AddTask = ({ onClickAddTask }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div className="flex flex-col bg-slate-300 p-4 rounded-lg gap-3">
      <Input
        type="text"
        placeholder="Titulo da Tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Descrição da Tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button className="p-3 bg-slate-500 rounded-md hover:bg-slate-600" onClick={
          () => {
            if (title.length == 0 || description.length == 0) {
              alert('penis');
              return;
            }
            onClickAddTask(title, description)
            setTitle('')
            setDescription('')
          }
        }>
          Adicionar
        </button>
    </div>
  );
};

export default AddTask;

