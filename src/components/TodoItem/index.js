import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelected } from '../../store/board';
import propTypes from 'prop-types';
import { Progress, SettingDialog } from '../../elements';

export default function TodoItem({id, parentId, name, done, progressPercentage, empty, setVisibleEditModal, setVisibleDeleteModal, handleMoveRight, handleMoveLeft}) {

	const todoIds = useSelector(state => state.board.todoIds);
	const dispatch = useDispatch();
	
	const [currentIndex, setCurrentIndex] = useState();
	const [lastIndex, setLastIndex] = useState();

	useEffect(() => {
		setLastIndex(todoIds.length)
		setCurrentIndex(todoIds.indexOf(parentId))
	}, [todoIds, parentId])
	

	let selectedItem = {
		id: id,
		todo_id: parentId,
		name: name,
		done: done,
		progress_percentage: `${progressPercentage}%`,
	}

	function onClickMoveRight() {
		handleMoveRight(selectedItem);
		dispatch(setSelected(selectedItem));
	}

	function onClickMoveLeft() {
		handleMoveLeft(selectedItem);
		dispatch(setSelected(selectedItem));
	}

	function onClickEdit() {
		setVisibleEditModal(true);
		dispatch(setSelected(selectedItem));
	}

	function onClickDelete() {
		setVisibleDeleteModal(true);
		dispatch(setSelected(selectedItem));
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
	setVisibleEditModal: propTypes.func,
    setVisibleDeleteModal: propTypes.func,
	handleMoveRight: propTypes.func,
	handleMoveLeft: propTypes.func
}