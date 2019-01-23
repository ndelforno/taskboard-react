import React, { Component } from 'react'
import axios from 'axios'
import Task from './task'

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

  render() {
    return (
      <div>
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
