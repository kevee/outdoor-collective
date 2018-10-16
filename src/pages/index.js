import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout.js'
import { css } from 'emotion'
import { Container } from 'reactstrap'
import Masthead from '../layouts/components/masthead'

const galleryClass = css`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;

  /* Create four equal columns that sits next to each other */
  .column {
    flex: 33.3333333%;
    max-width: 33.3333333%;
    padding: 0 4px;
  }

  .column img {
    margin-top: 8px;
    vertical-align: middle;
    max-width: 100%
  }

  @media screen and (max-width: 800px) {
    .column {
      flex: 100%;
      max-width: 100%;
    }
  }
`

const Homepage = (props) => {
  const page = props.data.allContentfulHomepage.edges[0].node
  let gallery = []
  let galleryIndex = 0
  page.gallery.map((image, index) => {
    if(typeof gallery[galleryIndex] === 'undefined') {
      gallery[galleryIndex] = []
    }
    gallery[galleryIndex].push(image)
    galleryIndex++
    if(galleryIndex > 2) {
      galleryIndex = 0
    }
  })
  return (
    <Layout>
      <Masthead image={page.largeImage.fluid.src} title="Outdoor collective" subheading="We envision a community with equitable access to nature and a shared commitment to conserve it."/>
      <div className="col-lg-8 col-md-10 mx-auto">
        <p className={css`
        
        `} dangerouslySetInnerHTML={{ __html: page.moreInfo.childMarkdownRemark.html}}/>
        
      </div>
      <div className="container">
        <div className={galleryClass}>
          {gallery.map((images, index) => (
            <div className="column" key={index}>
              {images.map((image, imageIndex) => (
                <img alt="" key={image.fluid.src} src={image.fluid.src}/>
              ))}
            </div>
          ))}
        </div>
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