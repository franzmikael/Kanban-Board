import React from 'react'
import propTypes from 'prop-types'

export default function Label(props) {
  return (
    <h5 className="card-title mb-3">
        <span className={`badge ${props.theme}`}>{props.text}</span>
    </h5>
  )
}

Label.propTypes = {
	text: propTypes.string,
	theme: propTypes.string,
}