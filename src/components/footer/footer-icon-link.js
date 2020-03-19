import React from "react"
import styled from "styled-components"

const IconLink = props => {
  const StyledIcon = styled.i`
    color: rgb(108, 117, 125);

    &:hover {
      color: ${props.hoverColor};
    }
  `

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledIcon className={props.fabIconClass}></StyledIcon>
    </a>
  )
}

export default IconLink
