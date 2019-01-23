import React, { Component } from 'react'
import axios from 'axios'
import Task from './task'
import update from 'immutability-helper'
import TaskForm from './taskForm'

class TasksContainer extends Component {

  constructor(props) {
  super(props);
    this.state = {
      tasks: [],
      editingTaskId: null
    };
  };

  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/tasks.json')
    .then(response => {
      console.log(response)
      this.setState({tasks: response.data})
    })
    .catch(error => console.log(error))
  }

  addNewTask = () => {
    axios.post(
      'http://localhost:3001/api/v1/tasks',
      {task:
        {
          title:'',
          body:''
        }
      }
    )
    .then(response => {
      console.log(response)
      const tasks = update(this.state.tasks, {
        $splice: [[0,0, response.data]]
      })
      this.setState({
        tasks: tasks,
        editingTaskId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  updateTask = (task) => {
    const taskIndex = this.state.tasks.findIndex(x => x.id === task.id)
    const tasks = update(this.state.tasks, {
      [taskIndex]: { $set: task }
    })
    this.setState({tasks: tasks})
  }


  render() {
    return (
      <div>
        <button className="newTaskButton" onClick={this.addNewTask}>
          New Task
          <span className="notification">
            {this.state.notification}
          </span>
        </button>
        {this.state.tasks.map((task) => {
          if(this.state.editingTaskId === task.id) {
            return(<TaskForm task={task} key={task.id} updateTask={this.updateTask} />)
          } else {
            return (<Task task={task} key={task.id} />)
          }
        })}
      </div>
    );
  }

}

export default TasksContainer
