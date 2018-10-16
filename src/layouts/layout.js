import React from 'react'
import Navigation from './components/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/clean-blog.min.css'
import { query } from '../pages/trainings'
import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children, data }) => (
  <div>
    <StaticQuery
    query={graphql`{
      allContentfulHomepage {
        edges {
          node {
            childContentfulHomepageNavigationTextNode {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        }
      }
    }`}
      render={data => (
        <Navigation navigation={data.allContentfulHomepage.edges[0].node.childContentfulHomepageNavigationTextNode.childMarkdownRemark.rawMarkdownBody}/>
      )}
    />
    
    <div>
      {children}
    </div>
  </div>
)

export default Layout
