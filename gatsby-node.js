const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const pageTemplate = path.resolve(`src/templates/page.js`)

  const trainingTemplate = path.resolve(`src/templates/training.js`)
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
    allContentfulTraining {
      edges {
        node {
          id
          title
          rsvpLink
          startDateTime
          endDateTime
          preTripDateTime
          moreInformation {
            childMarkdownRemark {
              html
            }
          }
          location {
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

    result.data.allContentfulTraining.edges.map(edge => {
      createPage({
        path: `training/${edge.node.id}`,
        component: trainingTemplate,
        layout: 'page',
        context: {
          filePath: edge.node.url,
          training: edge.node,
        }
      })
    })
  })
}