import React from "react";
import { ITask } from "../../interfaces";

interface Props {
  task: ITask,
  id: number,
  checkTask?(): void 
}

const CTask = ({ task, id, checkTask }: Props) => {
  return (
    <li className="flex gap-5">
      <span>{id}</span>
      <span>{task.task}</span>
      <button onClick={checkTask} >{task.isDone ? "✅" : "⬜"}</button>
    </li>
  );
};

export default CTask;
