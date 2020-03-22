import React from "react"

import StyledIcon from "./styled-icon"

const IconLink = props => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <StyledIcon fabIconClass={props.fabIconClass} hoverColor={props.hoverColor}></StyledIcon>
    </a>
  )
}

export default IconLink
