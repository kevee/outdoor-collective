import React from 'react'
import Navigation from './components/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/clean-blog.min.css'
import { query } from '../pages/trainings'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Helmet>
          <title>{this.props.pageTitle}</title>
        </Helmet>
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
          {this.props.children}
        </div>
      </div>
    
    )
  }
}

export default Layout
