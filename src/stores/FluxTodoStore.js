import { EventEmitter } from "events";

class FluxTodoStore extends EventEmitter{
	constructor(){
		super();
		this.todos = [
			{
				id: 1234567,
				text: "Study React",
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
	}

	getAll(){
		return this.todos;
	}
}

const fluxTodoStore = new FluxTodoStore;

export default fluxTodoStore;