import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout.js'
import { css } from 'emotion'
import { Container } from 'reactstrap'

const Homepage = (props) => {
  const page = props.data.allContentfulHomepage.edges[0].node
  return (
    <Layout>
      <header className="masthead" style={{backgroundImage: `url('${page.largeImage.fluid.src}`}}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <div className="site-heading">
              <h1>Outdoor collective</h1>
              <span className="subheading">We envision a community with equitable access to nature and a shared commitment to conserve it.</span>
            </div>
          </div>
        </div>
      </div>
    </header>
      <div className="col-lg-8 col-md-10 mx-auto">
        <p className={css`
        
        `} dangerouslySetInnerHTML={{ __html: page.moreInfo.childMarkdownRemark.html}}/>
      </div>
    </Layout>
  )
}

export default Homepage

export const query = graphql`
{ 
  allContentfulHomepage {
    edges {
      node {
        moreInfo {
          childMarkdownRemark {
            html
          }
        }
        largeImage {
          fluid {
            src
            srcSet
            srcWebp
            srcSetWebp
          }
        }
        mission
        gallery {
          fluid {
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
          }
        }
      }
    }
  }
}` 