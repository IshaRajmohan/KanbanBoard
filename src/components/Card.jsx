import React from 'react'

const Card = (props) => {
  return (
    <div
      className="card"
      draggable
      onDragStart={(e) => {
        e.dataTransfer.setData("task", props.title)
        e.dataTransfer.setData("sourceColumn", props.column)
      }}
    >
      <h3>{props.title}</h3>

      <button
        onClick={() => props.deleteTask(props.title, props.column)}
      >
        ❌
      </button>

    </div>
  )
}

export default Card