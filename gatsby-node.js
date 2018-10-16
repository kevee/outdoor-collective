const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)
  graphql(`
  {
    allContentfulPage {
      edges {
        node {
          title
          url
          largeImage {
            fluid {
              src
            }
          }
          content {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
  `).then(result => {
    result.data.allContentfulPage.edges.map(edge => {
      createPage({
        path: edge.node.url,
        component: pageTemplate,
        layout: 'page',
        context: {
          filePath: edge.node.url,
          page: edge.node,
        }
      })
    })
  })
}