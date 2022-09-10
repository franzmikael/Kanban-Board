import React from 'react';
import propTypes from 'prop-types';
import { Button, Progress } from 'elements';

import More from 'assets/icons/more-horizontal.svg';

export default function TodoItem(props) {
	if(props.noItem) {
		return (
			<div className="card-item no-task">No Task</div>
		);
	}
	return (
		<div className="card-item">
			{props.name}
			<hr />
			<div className="detail-wrapper">
				<Progress done={props.done} percentage={props.progressPercentage} />
				<Button isIcon icon={More} />
			</div>
		</div>
	)
}

TodoItem.propTypes = {
    id: propTypes.number,
    name: propTypes.string,
	done: propTypes.bool,
	progressPercentage: propTypes.number,
	noItem: propTypes.bool
}