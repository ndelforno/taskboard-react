import React from 'react'

const Task = ({task}) =>
  <div className="tile" key={task.id}>
    <h4>{task.title}</h4>
    <p>{task.body}</p>
  </div>

export default Task
