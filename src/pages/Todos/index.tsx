import React, { useState } from "react";
import { CFooter, CHeader } from "../../components";
import { ITask } from "../../interfaces";

const Index: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  console.log(task);

  const handleAddTask = () => {
    const newTask = { id: Date.now(), task: task, isDone: false };
    console.log(newTask)
    // setTodoList([...todoList, newTask]);
    setTask('')
  };

  return (
    <>
      <CHeader />
      <div className="md:px-[15%] md:py-4 px-3">
        <h1 className="text-center">Todo Lists</h1>
        <p className="text-center">
          Introducing simple CRUD Operation with React Hooks.
        </p>
        <div className="w-full flex items-center">
          <input
            type="input"
            placeholder="Enter a task"
            value={task}
            onChange={(inputText) => {
              setTask(inputText.target.value);
            }}
          />
          <button onClick={handleAddTask} type="submit">Add Task</button>
        </div>
      </div>

      <CFooter />
    </>
  );
};

export default Index;
