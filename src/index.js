//libraries
import React from 'react';
import ReactDOM from 'react-dom';
//components
import AppHeader from './components/app-header';
import SerchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

const App = () => {

	const todoData = [
		{label : 'Drink Coffee', important: false, id: 1},
		{label: 'Make App', important: true, id: 2},
		{label: 'Have A Lunch', important: false, id: 3}
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
