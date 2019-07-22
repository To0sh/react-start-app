//libraries
import React from 'react';
import ReactDOM from 'react-dom';
//components
import AppHeader from './components/app-header';
import SerchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

const App = () => {

	const todoData = [
		{label : 'Drink Coffee', important: false},
		{label: 'Make App', important: true},
		{label: 'Have A Lunch', important: false}
	];

	return (
		<div>
			<AppHeader />
			<SerchPanel />
			<ToDoList todos={todoData}/>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
