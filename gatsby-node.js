const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const postLayout = path.resolve(`./src/templates/post.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          group(field: frontmatter___layout) {
            edges {
              node {
                frontmatter {
                  layout
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    // Create blog posts pages.
    const groups = result.data.allMdx.group

    groups.forEach(group => {
      posts = group.edges
      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: `${post.node.frontmatter.layout}${post.node.fields.slug}`,
          component: postLayout,
          context: {
            slug: post.node.fields.slug,
            layout: post.node.frontmatter.layout,
            previous,
            next,
          },
        })
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
