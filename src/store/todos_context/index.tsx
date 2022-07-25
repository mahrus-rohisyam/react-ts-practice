import {  ITask } from "../../interfaces";

interface Props extends ITask {
  state: string | object | number | Array<string | object> | any,
  action: any
}

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = ({state, action}: Props) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo: any) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};