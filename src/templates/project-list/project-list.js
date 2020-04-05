import React from "react"
import { graphql } from "gatsby"
import { CardColumns } from "react-bootstrap"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import YapbPagination from "../../components/pagination/pagination"
import YapbCard from "../../components/card/card"

class ProjectList extends React.Component {
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
        <div className="yapb-project-list">
          <CardColumns>
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug
              return (
                <YapbCard
                  externalUrl={node.frontmatter.externalUrl}
                  link={`project${node.fields.slug}`}
                  cardBackground={cardBackground}
                  cardTextColor={cardTextColor}
                  title={title}
                  description={node.frontmatter.description}
                  excerpt={node.excerpt}
                  date={node.frontmatter.date}
                ></YapbCard>
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

export default ProjectList

export const pageQuery = graphql`
  query projectPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { eq: "project" } } }
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
            externalUrl
          }
        }
      }
    }
  }
`
