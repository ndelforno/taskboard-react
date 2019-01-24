import React, { Component } from 'react'


class Task extends Component {

  handleClick = () => {
    this.props.onClick(this.props.task.id)
  }

  render () {
    return(
      <div className="tile" >
        <h4 onClick={this.handleClick}>
          {this.props.task.title}
        </h4>
        <p onClick={this.handleClick}>
          {this.props.task.body}
        </p>
      </div>
    )
  }
}

export default Task
