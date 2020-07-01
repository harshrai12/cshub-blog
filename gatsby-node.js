const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve(`./src/templates/SinglePost.js`)
  const res = await graphql(`
  query {
    allContentfulCshub {
          edges {
              node {
                title
                author
                slug
              }
          }
      }
  }
`);
  res.data.allContentfulCshub.edges.forEach((edge) => {
    createPage({
        component: blogTemplate,
        path: `/SinglePost/${edge.node.slug}`,
        context: {
          slug: edge.node.slug
        }
    })
})
}

