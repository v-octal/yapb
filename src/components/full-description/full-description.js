import React from "react"
import { Row, Card, CardColumns } from "react-bootstrap"

import "./full-description.css"

const FullDescription = props => {
  const aboutMe = props.aboutMe
  const skills = props.skills

  const cardBackground = "light"
  const cardTextColor = "dark"

  const thingsIKnow = skills.map(row => {
    return (
      <Card bg={cardBackground} text={cardTextColor}>
        <Card.Header as="h5">{row.name}</Card.Header>
        <Card.Body>{row.description}</Card.Body>
      </Card>
    )
  })
  return (
    <Row>
      <Row>
        <h3>Who am I?</h3>
      </Row>
      <Row className="full-description-row-elem">{aboutMe}</Row>
      <Row>
        <h3>Things I know:</h3>
      </Row>
      <Row className="yapb-skill-list full-description-row-elem">
        <CardColumns>{thingsIKnow}</CardColumns>
      </Row>
    </Row>
  )
}

export default FullDescription
