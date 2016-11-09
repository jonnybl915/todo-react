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

 _remove: function(item){
    var items = this.state.items.filter(function(itm){
    return item.id !== itm.id;
    this.setState({
    items: items
    });
  });
},

 _addToDoItem: function(e){
   console.log("add button clicked!!!");

      let theToDoText = this.refs.todoData.value
      let isDone = false
      let isHighPriority = false

      let modAttributes = {
        toDoText: theToDoText,
        isDone: isDone,
        isHighPriority: isHighPriority,
      }
      let newToDoMod = new ToDoModel();
      newToDoMod.set(modAttributes);

      let copyOfToDoListData = this.state.toDoData.map(function(m){ return m })
      copyOfToDoListData.push(newToDoMod);

      let newState = {toDoData : copyOfToDoListData}
      this.setState(newState)

      this.refs.todoData.value = "";
      e.preventDefault();

 },

render: function(){
    let self = this;
    return  (
          <div className="todo-container">
             <form className="col s12" id="todo-form-container">
               <h3>My Todos</h3>

               <div className="row input-row">

                  <div className="input-field col s11">
                    <input placeholder="What Is There ToDo..." id="first_name" type="text" ref="todoData" className="validate todo-input"></input>


                    <label className="todo-input" ></label>
                  </div>
                  <div className="add-button">
                   <a className="btn-floating btn-med waves-effect waves-light red" onClick={this._addToDoItem}><i className="material-icons">add</i></a>
                  </div>
                </div>
             </form>
                 <ToDoItemList todoListData={this.state.toDoData} onRemove={this._remove}/>
          </div>
      )
}
})

const ToDoItemList = React.createClass({

  render: function(){

    let arrayOfToDoListItems = this.props.todoListData.map(function(model){
      return (
          <div>
          <input type="checkbox" id={model.cid}/>
          <label htmlFor={model.cid}/>
          <SingleToDoItem todoModel={model} key={model.cid}/>
          </div>
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

      <li className="todo-list-item">


        <p>
        {this.props.todoModel.get('toDoText')}
        </p>
        <a className="btn-floating btn-med waves-effect waves-light black" onClick={this._remove}> <i className="material-icons">delete</i> </a>
      </li>
    )
  }
})


ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
