import _ from 'lodash';
import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';


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

export default class App extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			todos, /*This is ES syntax for "todos: todos" */
			error: ""
		}
	}

	render(){

		//console.log('Root App props: ', this.props);

		return(
			<div>
				<h1>React To Dos App</h1>
				<CreateTodo 
					createTask={this.createTask.bind(this)} />
				<TodosList 
					todos={this.state.todos}
					toggleTask={this.toggleTask.bind(this)}
					saveTask={this.saveTask.bind(this)}
				/>
			</div>
		);
	}

	createTask(task){
		this.state.todos.push({
			task,
			isCompleted: false
		});
		this.setState({ todos: this.state.todos});
	}

	toggleTask(task){
		const foundTodo = _.find(this.state.todos, todo => todo.task === task);
		foundTodo.isCompleted = !foundTodo.isCompleted;
		this.setState({
			todos: this.state.todos
		})
	}

	saveTask(oldTask, newTask){
		const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
		foundTodo.task = newTask;
		this.setState({
			todos: this.state.todos
		})
		
	}

	deleteTask(task){

	}


}


























	/*practiceCode(){
		
		console.log('testing 1337 code');

		
		let dragon = (name, size, element) =>
			name + ' is a ' +
			size + ' dragon that breathes ' +
			element + '!';

		let dragon =
			name =>
				size =>
					element =>
						name + ' is a ' +
						size + ' dragon that breathes ' +
						element + '!';
		

		dragon = _.curry(dragon);

		console.log(dragon('fluffykins')('tiny')('fire'));
		
		const {createStore} = Redux;
		var createStore = Redux.createStore;
		import {createStore} from 'redux';

	}*/