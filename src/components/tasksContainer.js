import React, { Component } from 'react'
import axios from 'axios'
import Task from './task'
import update from 'immutability-helper'

class TasksContainer extends Component {

  constructor(props) {
  super(props);
    this.state = {
      tasks: []
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
      this.setState({tasks: tasks})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <button className="newTaskButton" onClick={this.addNewTask}>
          New Task
        </button>
        {this.state.tasks.map((task) => {
          return(
            <Task task={task} key={task.id}/>
          )
        })}
      </div>
    );
  }

}

export default TasksContainer
