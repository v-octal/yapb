import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Button from "../components/button"
import { Card, CardColumns } from "react-bootstrap"

import "../pageStyles/blog.css"

class Blog extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <div className="yapb-blog-list">
          <CardColumns>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link to={`blog${node.fields.slug}`}>
                  <Card border="secondary">
                    <Card.Header as='h5'>{title}</Card.Header>
                    <Card.Body>
                      <Card.Text>
                        {node.frontmatter.description || node.excerpt}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small>{node.frontmatter.date}</small>
                    </Card.Footer>
                  </Card>
                </Link>
              )
            })}
          </CardColumns>
        </div>
        <Link to="/">
          <Button marginTop="85px">Go Home</Button>
        </Link>
      </Layout>
    )
  }
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
