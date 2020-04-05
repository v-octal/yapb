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
                  externalUrl
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

      const previous = []
      const next = []

      let currNext = -1
      for (let index = 0; index < posts.length; index++) {
        if (!posts[index].node.frontmatter.externalUrl) {
          next.push(currNext)
          currNext = index
        } else {
          next.push(-1)
        }
      }

      let currPrevious = -1
      for (let index = posts.length - 1; index >= 0; index--) {
        if (!posts[index].node.frontmatter.externalUrl) {
          previous.push(currPrevious)
          currPrevious = index
        } else {
          previous.push(-1)
        }
      }

      previous.reverse()

      posts.forEach((post, index) => {
        if (!post.node.frontmatter.externalUrl) {
          const nextNode = next[index] >= 0 ? posts[next[index]].node : null
          const prevNode =
            previous[index] >= 0 ? posts[previous[index]].node : null
          createPage({
            path: `${post.node.frontmatter.layout}${post.node.fields.slug}`,
            component: postLayout,
            context: {
              slug: post.node.fields.slug,
              layout: post.node.frontmatter.layout,
              previous: prevNode,
              next: nextNode,
            },
          })
        }
      })

      const layoutMapping = {
        blog: {
          postsPerPage: 8,
          component: "./src/templates/blog-list/blog-list.js",
        },
        project: {
          postsPerPage: 12,
          component: "./src/templates/project-list/project-list.js",
        },
        review: {
          postsPerPage: 16,
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
