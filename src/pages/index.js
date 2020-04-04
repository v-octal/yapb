import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FullDescription from "../components/full-description/full-description"

import "../pages-styles/index.css"
class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const aboutYaml = data.aboutYaml

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <Container>
          <Row className="vertical-row-padding">
            <h1 className="grid-elem-centering" id="quote">"{aboutYaml.quote}"</h1>
          </Row>
          <Row md={1} lg={2} className="grid-elem-centering vertical-row-padding" id="brief-info">
            <Col md className="grid-elem-centering">
              <img src={aboutYaml.photo} alt="Gatsby Scene" />
            </Col>
            <Col md className="grid-elem-centering">
              <h2>
                Hey people{" "}
                <span role="img" aria-label="wave emoji">
                  👋
                </span>
                <p>I'm {aboutYaml.nickname || aboutYaml.name}!</p>
              </h2>
            </Col>
          </Row>
          <Row className="vertical-row-padding" id="scroll-down-button">
            <Link to="/#full-description" className="grid-elem-centering">
              <i class="fas fa-chevron-circle-down fa-2x"></i>
            </Link>
          </Row>
          <div id="full-description">
            <FullDescription
              aboutMe={aboutYaml.aboutMe}
              skills={aboutYaml.skills}
            ></FullDescription>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query {
    aboutYaml {
      name
      nickname
      quote
      aboutMe
      photo
      skills {
        description
        name
      }
    }
  }
`
