import React from 'react';
import propTypes from 'prop-types';
import { Progress, SettingDialog } from 'elements';

export default function TodoItem({id, parentId, name, done, progressPercentage, empty, setListTodoItems, setSelectedItem, setVisibleEditModal, setVisibleDeleteModal, handleMoveRight, handleMoveLeft}) {

	const selectedItem = {
		id: id,
		todo_id: parentId,
		name: name,
		done: done,
		progress_percentage: progressPercentage,
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
    setSelectedItem: propTypes.func,
	setVisibleEditModal: propTypes.func,
    setVisibleDeleteModal: propTypes.func,
	handleMoveRight: propTypes.func,
	handleMoveLeft: propTypes.func
}