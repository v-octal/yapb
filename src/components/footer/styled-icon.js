import React from "react"
import styled from "styled-components"

const StyledI = styled.i`
  color: rgb(108, 117, 125);

  &:hover {
    color: ${props => props.hoverColor || "black"};
  }
`

const StyledIcon = props => {
  return (
    <StyledI
      className={props.fabIconClass}
      hoverColor={props.hoverColor}
    ></StyledI>
  )
}

export default StyledIcon
