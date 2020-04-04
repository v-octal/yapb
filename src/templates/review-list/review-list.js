import React from "react"
import { Link, graphql } from "gatsby"
import { Card, CardColumns } from "react-bootstrap"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import YapbPagination from "../../components/pagination/pagination"

class ReviewList extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    const cardBackground = "light"
    const cardTextColor = "dark"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <div className="yapb-review-list">
          <CardColumns>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <Link to={`review${node.fields.slug}`}>
                  <Card bg={cardBackground} text={cardTextColor}>
                    <Card.Header as="h5">{title}</Card.Header>
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
        <YapbPagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
          numPages={numPages}
          currentPage={currentPage}
          layout={posts[0].node.frontmatter.layout}
        ></YapbPagination>
      </Layout>
    )
  }
}

export default ReviewList

export const pageQuery = graphql`
  query reviewPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { eq: "review" } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
            description
            layout
          }
        }
      }
    }
  }
`
