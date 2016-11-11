import React from 'react';

export default class TodosListItem extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			isEditing: false
		}
	}

	renderTaskSection(){

		const {task, isCompleted} = this.props;
		
		const taskStyle = {
			textDecoration: isCompleted ? 'line-through' : 'none',
			cursor: 'pointer'
		}

		if (this.state.isEditing){
			return (
				<td>
					<form action="">
						<input type="text"/>
					</form>
				</td>
			)
		}

		return (
			<td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)} >{task}</td>
		)
	}

	renderActionsSection(){

		if (this.state.isEditing){
			return (
				<td>
					<button onClick={this.onClickSave.bind(this)}>Save</button>
					<button onClick={this.onClickCancel.bind(this)}>Cancel</button>
				</td>
			)
		}

		return (
			<td>
				<button onClick={this.onClickEdit.bind(this)}>Edit</button>
				<button onClick={this.onClickDelete.bind(this)}>Delete</button>
			</td>
		)

	}

	render(){

		return (
			<tr>
				{this.renderTaskSection()}
				{this.renderActionsSection()}
			</tr>
		)

	}

	onClickSave(){

	}
	onClickCancel(){
		this.setState({ isEditing: false })
	}

	onClickEdit(){
		this.setState({ isEditing: true })
	}
	onClickDelete(){
		
	}

}

/* Left video at 20:15 https://www.youtube.com/embed/IR6smI_YJDE */