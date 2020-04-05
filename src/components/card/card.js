import React from "react"
import { Link } from "gatsby"
import { Card } from "react-bootstrap"

const YapbCard = props => {
  const card = props.externalUrl ? (
    <a href={props.externalUrl} target="_blank" rel="noopener noreferrer">
      <Card bg={props.cardBackground} text={props.cardTextColor}>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.description || props.excerpt}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>{props.date}</small>
        </Card.Footer>
      </Card>
    </a>
  ) : (
    <Link to={props.link}>
      <Card bg={props.cardBackground} text={props.cardTextColor}>
        <Card.Header as="h5">{props.title}</Card.Header>
        <Card.Body>
          <Card.Text>{props.description || props.excerpt}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small>{props.date}</small>
        </Card.Footer>
      </Card>
    </Link>
  )
  return card
}

export default YapbCard
