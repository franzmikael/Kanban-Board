import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types';

import CheckCircle from 'assets/icons/check-circle.svg'
import XCircle from 'assets/icons/x-circle.svg'

export default function Progress(props) {
    const [value, setValue] = useState(props.percentage !== null ? props.percentage : 0);
    const [state, setState] = useState();

    useEffect(() => {
        if (props.done === true || value === 100) {
            setState('complete');
        } else if (props.done === false) {
            setState('failed');
        } else {
            setState(null);
        }
    }, [props, value])

    return (
        <div className="progress-wrapper">
            <div className="progress">
                <div
                    className={`progress-bar ${state}`} 
                    role="progressbar"
                    style={{width: `${value}%`}}
                    aria-valuenow={value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
            {state === 'complete' && <img src={CheckCircle} alt='v'/>}
            {state === 'failed' && <img src={XCircle} alt='x'/>}
            {state === null && <span>{value}%</span>}
        </div>
    )
}

Progress.propTypes = {
	done: propTypes.bool,
	percentage: propTypes.number,
}