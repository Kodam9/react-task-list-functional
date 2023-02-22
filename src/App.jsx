import React from "react";
import TaskList from "./Components/TaskList";
import { TaskForm } from "./Components/TaskForm";

function App() {
  return (
    <main className="bg-slate-900 min-h-screen">
      <div className="container mx-auto p-5">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
