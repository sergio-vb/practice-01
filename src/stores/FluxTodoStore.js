import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

class FluxTodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
			{
				id: 1234567,
				text: "Study React and Flux",
				completed: false
			},
			{
				id: 3254761,
				text: "Study Angular",
				completed: false
			},
			{
				id: 8475892,
				text: "Study ES6",
				completed: true
			}
		]
		this.loading = false;
	}

	createTodo(text){
		const id = Date.now();

		this.todos.push({
			id,
			text,
			complete: false
		});
		this.emit("change");
	}
	fetchTodos(){
		this.loading = true;
		this.emit("change");
	}
	receiveTodos(todos){
		this.todos = todos;
		this.loading = false;
		this.emit("change");
	}

	getAll(){
		return this.todos;
	}
	getLoadingState(){
		return this.loading;
	}

	handleActions(action){
		console.log("Store received the action:", action );
		switch (action.type){
			case "CREATE_TODO":
				this.createTodo(action.text);
				break;
			case "RECEIVE_TODOS":
				this.receiveTodos(action.todos);
				break;
			case "FETCH_TODOS":
				this.fetchTodos();
		}
	}
}

const fluxTodoStore = new FluxTodoStore;
dispatcher.register(fluxTodoStore.handleActions.bind(fluxTodoStore));

window.todoStore = fluxTodoStore;
window.dispatcher = dispatcher;

export default fluxTodoStore;