import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         task: ['Task 1...', 'Task 2...', 'Task 3...', 'Task 4...']
      }
      this.handleAdd = this.handleAdd.bind(this);
   };
   handleAdd() {
      var newTask = this.state.task.concat([prompt('Create New Task')]);
      this.setState({tasks: newTask});
   }
   handleRemove(i) {
      var newTasks = this.state.tasks.slice();
      newTasks.splice(i, 1);
      this.setState({tasks: newTasks});
   }
   render() {
      var items = this.state.tasks.map(function(task, i) {
         return (
            <div key = {task} onClick = {this.handleRemove.bind(this, i)}>
               {item}
            </div>
         );
      }.bind(this));
      
      return (
         <div>      
            <button onClick = {this.handleAdd}>Add Task</button>
				
            <ReactCSSTransitionGroup transitionName = "example" 
               transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
               {items}
            </ReactCSSTransitionGroup>
         </div>
      );
   }
}
export default App;