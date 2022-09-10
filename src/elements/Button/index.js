import React from 'react'
import propTypes from 'prop-types'

export default function Button(props) {
  const className = [props.className];
  className.push("btn");
  if(props.isPrimary) className.push("btn-primary");
  if(props.isDanger) className.push("btn-danger");
  if(props.isOutline) className.push("btn-outline");
  if(props.isPlain) className.push("btn-plain");
  if(props.isCompact) className.push("btn-compact");
  if(props.isIcon) className.push("btn-icon");
  const hasIcon = props.hasOwnProperty("icon");

  const onClick = () => {
    if(props.onClick) props.onClick()
  };

  return (
    <button
      className={className.join(" ")}
      style={props.style}
      type={props.type}
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
  type: propTypes.string,
  icon: propTypes.string,
  isPrimary: propTypes.bool,
  isDanger: propTypes.bool,
  isOutline: propTypes.bool,
  isPlain: propTypes.bool,
  isCompact: propTypes.bool,
  isIcon: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
}