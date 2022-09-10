import React, { useEffect, useState} from 'react';
import propTypes from 'prop-types';
import { Progress, CustomModal, SettingDialog } from 'elements';

export default function TodoItem({id, parentId, name, done, progressPercentage, empty, setSelectedItem, setVisibleDeleteModal}) {

	const selectedItem = {
		id: id,
		todo_id: parentId,
		name: name,
		done: done,
		progress_percentage: progressPercentage
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
    setVisibleDeleteModal: propTypes.func
}