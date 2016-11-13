import React from 'react';

export default class TodosListItem extends React.Component{

	constructor(props){

		super(props);

		this.state = {
			isEditing: false
		}
	}

	/*Mine:
	renderTasksSection(){

		if (this.state.isEditing){
			return(
				<td>
					<input type="text" className="taskEditInput" ref="taskEditInput" placeholder={this.state.task} />
				</td>
			);
			
		}else{

			if (this.state.isCompleted){
				var classIsCompleted = "taskCompleted";
			}else{
				var classIsCompleted = "taskNotCompleted";
			}

			return(
				<td onClick={this.onClickTask.bind(this)} className={classIsCompleted} >{this.state.task}</td>
			);
		}

	}*/

	renderTasksSection(){

		const { task, isCompleted } = this.props;

		const taskStyle = {
			textDecoration: isCompleted ? 'line-through' : 'none',
			cursor: 'pointer'
		};

		if (this.state.isEditing){
			
			return(
				<td>
					<form onSubmit={this.onClickSave.bind(this)}>
						<input type="text" className="taskEditInput" ref="taskEditInput" placeholder={task} />
					</form>
				</td>
			);

		}else{

			return(
				<td style={taskStyle}
					onClick={this.props.toggleTask.bind(this, task)}
				>
					{task}
				</td>
			);

		}
	}

	renderActionsSection(){

		if (this.state.isEditing){
			return (
				<td>
					<button onClick={this.onClickSave.bind(this)}>Save</button>
					<button onClick={this.onClickCancel.bind(this)}>Cancel</button>
				</td>
			);

		}else{
			return (
				<td>
					<button onClick={this.onClickEdit.bind(this)}>Edit</button>
					<button onClick={this.onClickDelete.bind(this)}>Delete</button>
				</td>
			);
		}

	}

	render(){

		//console.log("TodosListItem render executed");

		return (
			<tr>
				{this.renderTasksSection()}
				{this.renderActionsSection()}
			</tr>
		);
	}

	onClickEdit(){

		this.setState({
			isEditing: true
		});

	}

	onClickDelete(){
		this.props.deleteTask(this.props.task);
	}

	onClickSave(event){

		event.preventDefault();

		if (this.refs.taskEditInput.value != ""){

			this.props.saveTask(this.props.task, this.refs.taskEditInput.value);

			this.setState({
				isEditing: false
			});

		}else{

			this.setState({
				isEditing: false
			});

		}

	}

	onClickCancel(){

		this.setState({
			isEditing: false
		});
	}

}

/* Left video at 20:15 https://www.youtube.com/embed/IR6smI_YJDE */