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

    let startingStateObject = {
       isSomethingGreat: false,
       toDoData : toDoModelsListArray
    }
    // console.log("todo models: ", toDoModelsListArray);




    return startingStateObject;
 },

 _addToDoItem: function(){
   console.log("add button clicked!!!");

      let theToDoText = this.refs.todo-input.value
      let isDone = false
      let isHighPriority = false

      let modAttributes = {
        toDoText: theToDoText,
        isDone: isDone,
        isHighPriority: isHighPriority,
      }
      let newToDoMod = toDoModel();
      newToDoMod.set(modAttributes);

      let copyOfToDoListData = this.state.toDoData.map(function(m){ return m })
      copyOfToDoListData.push(newToDoMod);

      let newState = {toDoData : toDoModelsListArray}
      this.setState(newState)
 },

render: function(){
    let self = this;
    return  (
          <div className="todo-container">
             <form className="col s12" id="todo-form-container">
               <h3>My Todos</h3>

               <div className="row input-row">

                  <div className="input-field col s11">
                    <input placeholder="What Is There ToDo..." id="first_name" type="text" ref="todo-input" className="validate todo-input"></input>


                    <label className="todo-input" ></label>
                  </div>
                  <div className="add-button">
                   <a className="btn-floating btn-med waves-effect waves-light red" onClick={this._addToDoItem}><i className="material-icons">add</i></a>
                  </div>
                </div>
             </form>
                 <ToDoItemList todoListData={this.state.toDoData}/>
          </div>
      )
}
})

const ToDoItemList = React.createClass({

  render: function(){

    let arrayOfToDoListItems = this.props.todoListData.map(function(model){
      return (
        <SingleToDoItem todoModel={model} key={model.cid}/>
      )
    })

    return (
        <div>
          <ul>
            {arrayOfToDoListItems}
          </ul>
        </div>
    )
  }
})

const SingleToDoItem = React.createClass({
  render: function(){
    return (
      <li>
          <input type="checkbox" name="" value=""/>
          <p>
            {this.props.todoModel.get('toDoText')}
          </p>
          <button>
            <i className="delete-button"></i>
          </button>
      </li>
    )
  }
})


ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
