import React, { useEffect, useState } from 'react'
import propTypes from 'prop-types';

import CheckCircle from '../../assets/icons/check-circle.svg'
import XCircle from '../../assets/icons/x-circle.svg'

export default function Progress({done, percentage}) {
    const [value, setValue] = useState(percentage !== null ? percentage : 0);
    const [state, setState] = useState();

    useEffect(() => {
        setValue(percentage)

        if (done === true || value === 100) {
            setState('complete');
        } else if (done === false) {
            setState('failed');
        } else {
            setState(null);
        }
    }, [value, done, percentage])

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