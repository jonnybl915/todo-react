const ReactDOM = require('react-dom');
const React = require('react');
const Backbone = require('backbone');
var $ = require('jquery');
console.log("React Object: ", React);


const HomeView = React.createClass({


  render: function(){
    return (
      <div className="todo-container">
        <form className="col s12" id="todo-form-container">
          <div className="row">
             <div className="input-field col s6">
               <input placeholder="Placeholder" id="first_name" type="text" className="validate todo-input"></input>
               <label className="todo-input" ></label>
             </div>
           </div>
        </form>
      </div>





    )
  }
})
ReactDOM.render(<HomeView/>, document.querySelector('#app-container'))
