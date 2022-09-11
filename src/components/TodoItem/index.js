import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import { Progress, SettingDialog } from '../../elements';

export default function TodoItem({id, parentId, name, done, progressPercentage, empty, listTodos, setListTodoItems, setSelectedItem, setVisibleEditModal, setVisibleDeleteModal, handleMoveRight, handleMoveLeft}) {

	const [todosIds, setTodosIds] = useState([]);
	const [currentIndex, setCurrentIndex] = useState();
	const [lastIndex, setLastIndex] = useState();

	useEffect(() => {
		if(listTodos) {
			setTodosIds(listTodos.map(todo => {return todo.id}));
		}
	}, [])

	useEffect(() => {
		setLastIndex(todosIds.length)
		setCurrentIndex(todosIds.indexOf(parentId))
	}, [todosIds])
	

	let selectedItem = {
		id: id,
		todo_id: parentId,
		name: name,
		done: done,
		progress_percentage: `${progressPercentage}%`,
	}

	function onClickMoveRight() {
		setSelectedItem(selectedItem);
		handleMoveRight(selectedItem);
	}

	function onClickMoveLeft() {
		setSelectedItem(selectedItem);
		handleMoveLeft(selectedItem);
	}

	function onClickEdit() {
		setVisibleEditModal(true);
		setSelectedItem(selectedItem);
	}

	function onClickDelete() {
		setVisibleDeleteModal(true);
		setSelectedItem(selectedItem);
	}

	if(empty) {
		return (
			<div className="card-item no-task">No Task</div>
		);
	}

	return (
		<>
			<div className="card-item">
				{name}
				<hr />
				<div className="detail-wrapper">
					<Progress 
						done={done} 
						percentage={progressPercentage} 
					/>
					<SettingDialog
						currentIndex={currentIndex}
						lastIndex={lastIndex}
						moveRightHandler={onClickMoveRight}
						moveLeftHandler={onClickMoveLeft}
						editHandler={onClickEdit}
						deleteHandler={onClickDelete}
					/>
				</div>
			</div>
		</>
	)
}

TodoItem.propTypes = {
    id: propTypes.number,
    parentId: propTypes.number,
    name: propTypes.string,
	done: propTypes.bool,
	progressPercentage: propTypes.number,
	empty: propTypes.bool,
	listTodos: propTypes.array,
	setListTodoItems: propTypes.func,
    setSelectedItem: propTypes.func,
	setVisibleEditModal: propTypes.func,
    setVisibleDeleteModal: propTypes.func,
	handleMoveRight: propTypes.func,
	handleMoveLeft: propTypes.func
}