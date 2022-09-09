import React from 'react'
import propTypes from 'prop-types';
import { Button } from 'components'

import CheckCircle from 'assets/icons/check-circle.svg'
import XCircle from 'assets/icons/x-circle.svg'
import More from 'assets/icons/more-horizontal.svg'

export default function TodoItem(props) {
	const progress = props.progressPercentage !== null ? props.progressPercentage : 0;
	let progressIcon, progressState;
	if (props.done === true) {
		progressIcon = <img src={CheckCircle} alt='v'/>
		progressState = 'complete'
	} else if (props.done === false) {
		progressIcon = <img src={XCircle} alt='x'/>
		progressState = 'failed'
	} else {
		progressIcon = <span>{progress}%</span>
	}

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
				<div className="progress-wrapper">
					<div className="progress">
						<div className={`progress-bar ${progressState}`} role="progressbar" style={{width: `${progress}%`}} aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100"></div>
					</div>
					{progressIcon}
				</div>
				<Button icon={More}/>
			</div>
		</div>
	)
}

TodoItem.propTypes = {
    key: propTypes.number,
    id: propTypes.number,
    name: propTypes.string,
	done: propTypes.bool,
	progressPercentage: propTypes.number,
	noItem: propTypes.bool
}