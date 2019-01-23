import React, { Component } from 'react'
import axios from 'axios'

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
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        Tasks
      </div>
    )
  }

}

export default TasksContainer
