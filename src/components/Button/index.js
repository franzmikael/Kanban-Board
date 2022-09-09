import React from 'react'
import propTypes from 'prop-types';

export default function Button(props) {
  const className = [props.className];
  className.push("btn");
  if(props.isPrimary) className.push("btn-primary");
  if(props.isPlain) className.push("btn-plain");
  if(props.isCompact) className.push("btn-compact");
  const hasIcon = props.hasOwnProperty('icon');

  const onClick = () => {
    if(props.onClick) props.onClick()
  };

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {hasIcon && <img src={props.icon} alt='icon'/> }
      {props.children}
    </button>
  )
}

Button.propTypes = {
  onClick: propTypes.func,
  className: propTypes.string,
  icon: propTypes.string,
  isPrimary: propTypes.bool,
  isPlain: propTypes.bool,
  isCompact: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
}