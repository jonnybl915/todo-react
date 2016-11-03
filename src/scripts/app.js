const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
var $ = require('jquery');

console.log("React Object: ", React);

let ToDoModel = Backbone.Model.extend({});

let defaultToDo = new ToDoModel();
let defaultToDo2 = new ToDoModel();

let modelAttributes = {
   toDoText: "Take out the trash",
   isDone: false,
   isHighPriority: false,   
}

let modelAtributes2 = {
   toDoText: "Do Work",
   isDone: false,
   isHighPriority: true,
}

const HomeView = React.createClass({

  getInitialState: function(){
    let startingStateObj = {
       isSomethingGreat: false
    }

    return startingStateObj //note: this MUST be an object
 },

  render: function(){
    return (
      <div className="todo-container">
        <form className="col s12" id="todo-form-container">
          <div className="row">
             <h3>My Todos</h3>
             <div className="input-field col s6">
               <input placeholder="What Is There ToDo..." id="first_name" type="text" className="validate todo-input"></input>
               <label className="todo-input" ></label>
             </div>
           </div>
        </form>
      </div>





    )
  }
})
ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
