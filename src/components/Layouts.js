import React, {Component} from 'react';
import Todo from "./Todo";

export default class Layout extends Component {
  constructor() {
    super();
    this.state = {
      todos : [
			{
				text: "make yoga",
				isCompleted: true,
				id: 1
			},
			{
				text: "love cat",
				isCompleted: false,
				id: 2
			}
		]
    };
  }

  	submitToDo(item){
  		var itemToPush = {
  			text: item,
  			isCompleted: false,
  			id: new Date().getTime()
  		}
  		this.state.todos.push(itemToPush);
  		console.log("itemul e", item)
  		this.forceUpdate()
  	}

  render() {
  	console.log(this)
    return (
      <div>
       <Todo todos={this.state.todos} addNew={this.submitToDo.bind(this)} />
      </div>
    );
  }
}