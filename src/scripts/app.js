const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
var $ = require('jquery');

console.log("React Object: ", React);

let ToDoModel = Backbone.Model.extend({});

const HomeView = React.createClass({

  getInitialState: function(){

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

    defaultToDo.set(modelAttributes);
    defaultToDo2.set(modelAtributes2);

    let toDoModelsListArray = [];
     toDoModelsListArray.push(defaultToDo);
     toDoModelsListArray.push(defaultToDo2);

    let startingStateObject = {
       isSomethingGreat: false,
       toDoData : toDoModelsListArray
    }
    console.log("startingStateObject: ", startingStateObject);
    return startingStateObject;
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
