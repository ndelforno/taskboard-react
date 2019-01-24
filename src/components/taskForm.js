import React, { Component } from 'react'
import axios from 'axios'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.task.title,
      body: this.props.task.body
    }
  }


  handleInput = (e) => {
    this.props.resetNotification()
    this.setState({[e.target.name]: e.target.value})
  }


  handleBlur = () => {
  const task = {
    title: this.state.title,
    body: this.state.body
  }

  axios.put(
    `http://localhost:3001/api/v1/tasks/${this.props.task.id}`,
    {
      task: task
    })
    .then(response => {
      console.log(response)
      this.props.updateTask(response.data)
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <div className="tile">
        <form onBlur={this.handleBlur}>
          <input className='input' type="text"
            name="title" placeholder='Enter a Title'
            value={this.state.title} onChange={this.handleInput}
            ref={this.props.titleRef}/>
          <textarea className='input' name="body"
            placeholder='Describe your Task'
            value={this.state.body} onChange={this.handleInput}>
          </textarea>
        </form>
      </div>
    );
  }
}

export default TaskForm
