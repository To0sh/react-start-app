import React from 'react';
import ToDoListItem from './todo-list-item';

const ToDoList = () => {
	return (
		<ul>
			<li><ToDoListItem /></li>
			<li>Build App</li>
		</ul>
	);
};

export default ToDoList;