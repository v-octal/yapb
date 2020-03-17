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

      const layoutMapping = {
        blog: {
          postsPerPage: 6,
          component: "./src/templates/blog-list/blog-list.js",
        },
        project: {
          postsPerPage: 8,
          component: "./src/templates/project-list/project-list.js",
        },
        review: {
          postsPerPage: 12,
          component: "./src/templates/review-list/review-list.js",
        },
      }

      const postsPerPage =
        layoutMapping[posts[0].node.frontmatter.layout].postsPerPage
      const listComponent =
        layoutMapping[posts[0].node.frontmatter.layout].component
      const numPages = Math.ceil(posts.length / postsPerPage)

      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path:
            i === 0
              ? `/${posts[0].node.frontmatter.layout}/`
              : `/${posts[0].node.frontmatter.layout}/${i + 1}`,
          component: path.resolve(listComponent),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
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
