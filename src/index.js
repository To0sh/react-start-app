//libraries
import React from 'react';
import ReactDOM from 'react-dom';
//components
import AppHeader from './components/app-header';
import SerchPanel from './components/search-panel';
import ToDoList from './components/todo-list';

const App = () => {
	return (
		<div>
			<AppHeader />
			<SerchPanel />
			<ToDoList />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));
