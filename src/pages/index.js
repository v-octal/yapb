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
    const aboutYaml = data.pagesYaml

    return (
      <Layout location={this.props.location}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <div id="landing-screen">
          <div id="index-quote">
            <h1 className="grid-elem-centering" id="quote">
              "{aboutYaml.quote}"
            </h1>
          </div>
          <Container>
            <Row
              md={1}
              lg={2}
              className="grid-elem-centering"
              id="brief-info"
            >
              <Col md className="grid-elem-centering">
                <img id="profile-image" src={aboutYaml.photo} alt="Profile" />
              </Col>
              <Col md className="grid-elem-centering">
                <h2 id="index-greetings">
                  Hello there{" "}
                  <span role="img" aria-label="wave emoji">
                    👋
                  </span>
                  <p>I'm {aboutYaml.nickname || aboutYaml.name}!</p>
                </h2>
              </Col>
            </Row>
          </Container>
          <div id="scroll-down-button">
            <Link to="/#full-description" className="grid-elem-centering">
              <i class="fas fa-chevron-circle-down fa-2x"></i>
            </Link>
          </div>
        </div>
        <Container>
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
    pagesYaml {
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
