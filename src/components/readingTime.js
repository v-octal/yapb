import React from "react"
import styled from "styled-components"

const ReadingTime = props => {
  const wpm = 250
  const words = props.words ? props.words : 0
  const time = parseInt(words / wpm)
  const timeToRead = props.words
    ? `${time}-${time + 1} min read`
    : `Read time not available`

  return (
    <div>
      <ReadingTimeWrapper>{timeToRead}</ReadingTimeWrapper>
      <br></br>
    </div>
  )
}

const ReadingTimeWrapper = styled.div`
  display: inline-block;
  border: none;
  text-align: center;
  text-decoration: none;
  padding: 0.2em 0.5em;
  background: black;
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 600;
  border-radius: 0.33em;
`

export default ReadingTime
