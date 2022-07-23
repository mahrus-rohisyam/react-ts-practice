import React from "react"

interface ITodos {
  id: number,
  todo: string,
  isDone: false,
  setTodo?: React.Dispatch<React.SetStateAction<string>>,
  onSubmit?: any
}

export type {ITodos}