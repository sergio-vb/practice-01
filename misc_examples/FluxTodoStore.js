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

	receiveTodos(todos){
		this.todos = todos;
		this.emit("change");
	}

	getAll(){
		return this.todos
	}

	handleActions(action){
		console.log("TodoStore received an action", action);

		switch(action.type){
			
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}

			case "RECEIVE_TODOs": {
				this.receiveTodos(action.todos)
			}

		}
	}

}

const todoStore = new TodoStore;

dispatcher.register(todoStore.handleActions.bind(todoStore)); 
/* The dispatcher object basically has two main methods:
 - register(): To register a new listener, in this case our todo store.
 - dispatch(): To dispatch an action to all of the listeners.
 */

export default todoStore;

/* In the importing file, which is going to be the React component that needs access to the to-dos:


import TodoStore from "../stores/TodoStore";
import * as TodoActions from "TodoActions";

export default class Featured extend React.Component{
	
	constructor(){
		super();
		this.getTodos = this.getTodos.bind(this);
		this.state = {
			todos: TodoStore.getAll()
		};
	}

	componentWillMount(){ //Fires when the component is going to render to the DOM for the first time
		TodoStore.on("change", this.getTodos);
	}

	//Need to remove listener because whenever the route changes a new component will be created
	//If it's not removed, the unmounted components will still be listening to the change event,
	//so they will try to update state, and this is an error (they are unmounted, and not connected
	//to the DOM anymore)
	componentWillUnmount(){ 
		TodoStore.removeListener("change", this.getTodos);
	}

	getTodos(){
		this.setState({
			todos: TodoStore.getAll()
		})
	}

	createTodo(){ //Method triggered by a button clicked by the user
		TodoActions.createTodo(Date.now());
	}

	//Async example:
	reloadTodos(){
		TodoActions.reloadTodos();
	}
}


*/



/* In summary:

1) React component:
1.a) The React component imports the Flux Store.
1.b) This component can get the store's data using a store method.
1.c) This component subscribes to the store's onChange, to update the state whenever the store changes.

2) Flux store:
2.1) The store extends EventEmitter from events. It saves data as a custom object. Need to create an instance
2.2) Store subscribes to a dispatcher, declaring the method that will handle the actions received from the dispatcher. 
		Example: dispatcher.register(todoStore.handleActions.bind(todoStore));
2.3) Exports an instance of the store class 

3) Dispatcher:
3.1) Just imports Dispatcher from flux (needs npm install of flux), and exports an instance:
		import { Dispatcher } from "flux";
		export default new Dispatcher;

It's suggested to have the following folders: actions, components, pages, stores; the dispatcher would be outside.

*/