import React from 'react'
import Card from './Card'
import { useState } from "react"

const Column = (props) => {
  const [input, setInput] = useState("")

  return (
    <div
      className="column"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        const task = e.dataTransfer.getData("task")
        const sourceColumn = e.dataTransfer.getData("sourceColumn")

        props.moveTask(task, sourceColumn, props.column)
      }}
    >
      <h2>{props.title}</h2>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={() => {
          props.addTask(props.column, input)
          setInput("")
        }}
      >
        Add Task
      </button>

      {props.tasks.map((task, index) => (
        <Card
          key={index}
          title={task}
          column={props.column}
          deleteTask={props.deleteTask}
        />
      ))}
    </div>
  )
}

export default Column