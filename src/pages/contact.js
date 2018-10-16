import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout.js'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Masthead from '../layouts/components/masthead'

const Contact = (props) => {
  const contact = props.data.allContentfulContact.edges[0].node
  return (
    <Layout>
      <Masthead image={contact.largeImage.fluid.src} title="Contact us"/>
      <div className="container">
      
        <div dangerouslySetInnerHTML={{__html: contact.contactLeadIn.childMarkdownRemark.html}}/>
        <MailchimpSubscribe url={contact.childContentfulContactMailchimpTextNode.mailchimp}/>
      </div>
    </Layout>
  )
}

export default Contact

export const query = graphql`{
  allContentfulContact {
    edges {
      node {
        contactLeadIn {
          childMarkdownRemark {
            html
          }
        }
        childContentfulContactMailchimpTextNode {
          mailchimp
        }
        largeImage {
          fluid {
            src
          }
        }
      }
      
    }
  }
}
` 