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
      this.setState({tasks: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((task) => {
          return(
            <div className="tile" key={task.id} >
              <h4>{task.title}</h4>
              <p>{task.body}</p>
            </div>
          )
        })}
      </div>
    );
  }

}

export default TasksContainer
