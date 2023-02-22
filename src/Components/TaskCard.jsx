import React, { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

export function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className=" text-white p-4 rounded-md m-auto text-center flex flex-col border border-slate-400 w-full h-full">
      <section className=" mt- border-teal-50 ">
        <h1 className="text-xl font-bold capitalize text-center">
          {task.title}
        </h1>
        <p className="text-gray-500 text-sm text-left mt-5 mb-10">
          {task.description}
        </p>
      </section>
      <button
        className="bg-red-500 hover:bg-red-900 p-1 rounded-md flex justify-center  self-center w-44 mt-auto"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
