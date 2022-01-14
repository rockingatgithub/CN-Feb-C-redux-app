import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllTask } from '../actions';

class App extends Component {


 fetchTask = () => {
   this.props.dispatch(getAllTask());   
 }

  render() {

    const {list} = this.props;

    return (
      <div>

        <button onClick={this.fetchTask}> Get Task </button>

        {list.map((task) => <div key={task.id} > {task.title} </div> )}
        
      </div>
    );
  }
}

function callback(state){
  return {
    list: state.list,
  }
}

export default  connect(callback)(App);