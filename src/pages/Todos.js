import React from 'react';
import TodosList from '../components/todos-list';
import CreateTodo from '../components/create-todo.js';
import ErrorDisplay from '../components/error-display.js';


const todos = [
{
	task: 'Make React tutorial',
	isCompleted: false
},
{
	task: 'Eat dinner',
	isCompleted: true
}
];

export default class Todos extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			todos, /*This is ES6 syntax for "todos: todos" */
			error: null
		}
	}

	render(){
		return(
			<div>
				<h3>React To Dos Practice</h3>
				
				<CreateTodo createTask={this.createTask.bind(this)} />
				<ErrorDisplay error={this.state.error} />
				
				<p>Click a task to mark it as complete</p>
				<TodosList
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
					deleteTask={this.deleteTask.bind(this)} />
			</div>
		);
	}

	toggleTask(task){

		/* Practice code:
		let foobar = {
			foo: 1,
			bar: 2
		}
		let foobarArray = ['1','2']
		let { bar } = foobar;
		let [ bar2 ] = foobarArray
		console.log(bar, ", ", bar2);

		let calculate = ({x:z, y}) => (z + y)
		let example = {
			x: 5,
			y: 12
		}
		console.log( calculate(example));*/

		const foundTodo = this.state.todos.find(todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({
			todos: this.state.todos
		});

	}

	createTask(task){

		const foundTodo = this.state.todos.find(todo => todo.task === task);
		

		if (foundTodo !== undefined){
			this.setState({error: "Task already exists."});
			return;
		}
		if (task === ""){
			this.setState({error: "Please enter a task."});
			return;	
		}

		this.setState({error: null});
		
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({
			todos: this.state.todos
		});

	}

	saveTask(oldTask, newTask){

		const foundTodoWithNewTask = this.state.todos.find(todo => todo.task === newTask);

		if (foundTodoWithNewTask !== undefined){
			this.setState({error: "Task already exists, can't update."});
			return;
		}

		const foundTodo = this.state.todos.find(todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({
			todos: this.state.todos
		});

	}

	deleteTask(task){

		_.remove(this.state.todos, todo => todo.task === task);
		this.setState({
			todos: this.state.todos
		})

	}

}