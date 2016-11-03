const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');



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

    this.startingStateObject = {
       isSomethingGreat: false,
       toDoData : toDoModelsListArray
    }



    console.log("startingStateObject: ", this.startingStateObject);
    return this.startingStateObject;
 },
 _addToDoItemToList: function(){
   
 }

  render: function(){
    return (
      <div className="todo-container">
        <form className="col s12" id="todo-form-container">
          <h3>My Todos</h3>

          <div className="row input-row">

             <div className="input-field col s11">
               <input placeholder="What Is There ToDo..." id="first_name" type="text" ref="todo-input" className="validate todo-input"></input>


               <label className="todo-input" ></label>
             </div>
             <div className="add-button">
               <a className="btn-floating btn-med waves-effect waves-light red" onClick={this._addToDoItemToList}><i className="material-icons">add</i></a>
             </div>
           </div>
        </form>
        <ul className="collection">

        </ul>
      </div>





    )
  }
})
ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
