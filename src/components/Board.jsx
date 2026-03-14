import React from 'react'
import Column from './Column'
import { useState } from 'react'

const Board = () => {

  const [tasks, setTasks] = useState({
    todo: ["learn karate", "learn react"],
    inProgress: ["learn node", "learn express"],
    done: ["learn html", "learn css"]
  })

  const addTask = (column, newTask) => {
    setTasks({
      ...tasks,
      [column]: [...tasks[column], newTask]
    })
  }

  const moveTask = (task, fromColumn, toColumn) => {

    if (fromColumn === toColumn) return

    // remove task from source column
    const updatedSourceTasks = tasks[fromColumn].filter(
      t => t !== task
    )

    // add task to destination column
    const updatedDestinationTasks = [
      ...tasks[toColumn],
      task
    ]

    // update state
    setTasks({
      ...tasks,
      [fromColumn]: updatedSourceTasks,
      [toColumn]: updatedDestinationTasks
    })
  }

  const deleteTask = (task, column) => {

    const updatedTasks = tasks[column].filter(
      t => t !== task
    )

    setTasks({
      ...tasks,
      [column]: updatedTasks
    })
  }

  return (
    <div>

      <h1>Kanban Board</h1>

      <div className="board">

        <Column
          title="To do"
          tasks={tasks.todo}
          addTask={addTask}
          column="todo"
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <Column
          title="In Progress"
          tasks={tasks.inProgress}
          addTask={addTask}
          column="inProgress"
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

        <Column
          title="Done"
          tasks={tasks.done}
          addTask={addTask}
          column="done"
          moveTask={moveTask}
          deleteTask={deleteTask}
        />

      </div>

    </div>
  )
}

export default Board