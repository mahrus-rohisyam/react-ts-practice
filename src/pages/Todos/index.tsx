import React, { useState } from "react";
import { CFooter, CHeader, CTask } from "../../components";
import { ITask } from "../../interfaces";

const Index: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleAddTask = async () => {
    const newTask = { id: Date.now(), task: task, isDone: false };
    setTodoList([...todoList, newTask]);
    setTask("");
    await console.log(todoList);
  };

  const handleCompleteTask = async (parameterID: number) => {
    const data = todoList;
    setTodoList(
      data.map((v) => {
        if (v.id === parameterID) {
          v.isDone = !v.isDone;
          return v;
        } else {
          return v;
        }
      })
    );
    await console.log(data);
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
          {task.length > 5 && (
            <button onClick={handleAddTask} type="submit">
              Add Task
            </button>
          )}
        </div>
        <div>
          {todoList.length > 0
            ? todoList.map((task: ITask, i) => {
                return (
                  <CTask
                    task={task}
                    id={i + 1}
                    checkTask={() => {
                      handleCompleteTask(task.id);
                    }}
                  />
                );
              })
            : "There is no any Data :("}
        </div>
      </div>

      <CFooter />
    </>
  );
};

export default Index;
