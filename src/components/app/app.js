//libraries
import React, { Component } from 'react';
//components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
//styles
import './app.css';

export default class App extends Component  {

	state = {
		todoData: [
				{label : 'Drink Coffee', important: false, id: 1},
				{label: 'Make App', important: true, id: 2},
				{label: 'Have A Lunch', important: false, id: 3}
			]	
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

			return {
				todoData: newArray
			};
		});
	};

	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3}/>
				<div className="top-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>

				<ToDoList
					todos={this.state.todoData}
					onDeleted={ this.deleteItem }
				/>
			</div>
		);		
	}
};
