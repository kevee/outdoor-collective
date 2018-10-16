import React from 'react'
import Layout from '../layouts/layout'
import Masthead from '../layouts/components/masthead'

const PageTemplate = (props) => (
  <Layout>
    <Masthead title={props.pageContext.page.title} image={props.pageContext.page.largeImage.fluid.src}/>
    <div className="container">
      <div dangerouslySetInnerHTML={{__html : props.pageContext.page.content.childMarkdownRemark.html}}>
      </div>
    </div>
  </Layout>  
  )

export default PageTemplate