import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout.js'
import { css } from 'emotion'
import { Container } from 'reactstrap'

const Homepage = (props) => {
  const page = props.data.allContentfulHomepage.edges[0].node
  return (
    <Layout>
      <div className={css`
        background-image: url(${page.largeImage.fluid.src});
        background-repeat: no-repeat;
        background-position: center;
        background-size:cover;
        background-attachment: fixed;
        height: 75vh;
    `}>
    </div>
      <Container>
        <p className={css`
        
        `} dangerouslySetInnerHTML={{ __html: page.moreInfo.childMarkdownRemark.html}}/>
      </Container>
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