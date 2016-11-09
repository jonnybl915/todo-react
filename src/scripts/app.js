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

 _removeToDoItemFromState: function(item){
   console.log("whole item: ", item);
   let targetItem = item.target.parentNode.parentNode.parentNode;
   console.log("Trying To Remove!!", targetItem);

   console.log("target item: ", targetItem);
   let copyOfToDoListDataToDeleteFrom = this.state.toDoData.filter(function(itm){
   console.log("itm id: ", itm.cid);

   return targetItem.id !== itm.cid;
   console.log("copyOfToDoListMinusDeletedItems: ", copyOfToDoListDataToDeleteFrom);
   })

   let newState = {toDoData : copyOfToDoListDataToDeleteFrom}
   this.setState(newState)
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
                 <ToDoItemList todoListData={this.state.toDoData} onRemoveItem={self._removeToDoItemFromState}/>
          </div>
      )
}
})

const ToDoItemList = React.createClass({

  render: function(){

    let self = this;

    let arrayOfToDoListItems = this.props.todoListData.map(function(model){

      return (

            <li className="todo-list-item" id={model.cid} key={model.cid}>

              <input type="checkbox" id={model.cid + 1} className="todo-checkbox"/>
              <label className="todo-checkbox" htmlFor={model.cid + 1}/>

              <SingleToDoItem todoModel={model} _removeToDoItem={self.props.onRemoveItem}/>

            </li>
      )
    })

    return (
        <div>
          <ul className="ul-of-todo-items">
            {arrayOfToDoListItems}
          </ul>
        </div>
    )
  }
})

const SingleToDoItem = React.createClass({

  render: function(){
    return (

        <div className="li-div">
          <p>
          {this.props.todoModel.get('toDoText')}
          </p>

          <a className="trash-icon" onClick={this.props._removeToDoItem}>
            <i className="material-icons">delete</i>
          </a>

        </div>

    )
  }
})


ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
