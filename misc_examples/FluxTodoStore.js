import { EventEmitter } from "events";

import dispatcher from "../dispatcher"; /* Needs to have installer flux and created the dispatcher.js file */

class TodoStore extends EventEmitter {
	constructor(){
		super();
		this.todos: [
			{
				id: 113464613,
				text: "Go Shopping",
				complete: false
			},
			{
				id: 235684679,
				text: "Pay Bills",
				complete: false
			}
		]
	}

	createTodo(text){

		const id = Date.now();
		this.todos.push({
			id,
			text,
			complete: false
		})
		this.emit("change");
	}

	getAll(){
		return this.todos
	}

}

const todoStore = new TodoStore;
dispatcher.register();

export default todoStore;

/* In the importing file:

import TodoStore from "../stores/TodoStore";

export default class Featured extend React.Component{
	
	constructor(){
		super();
		this.state = {
			todos: TodoStore.getAll()
		};
	}

	componentWillMount(){ //Fires when the component is going to render to the DOM for the first time
		TodoStore.on("change", () => { //Arrow function automatically binds to this
			this.setState({
				todos: TodoStore.getAll()
			})
		})
	}
}


*/