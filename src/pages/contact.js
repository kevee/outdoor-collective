import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout.js'
import { css } from 'emotion'
import { Container } from 'reactstrap'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Contact = (props) => {
  return (
    <Layout>
      <Container>
        <h2>Get in touch</h2>
        <div dangerouslySetInnerHTML={{__html: props.data.allContentfulContact.edges[0].node.contactLeadIn.childMarkdownRemark.html}}/>
        <MailchimpSubscribe url={props.data.allContentfulContact.edges[0].node.childContentfulContactMailchimpTextNode.mailchimp}/>
      </Container>
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
      }
    }
  }
}
` 