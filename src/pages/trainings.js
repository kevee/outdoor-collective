import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout.js'
import { css } from 'emotion'
import Link from 'gatsby-link'
import moment from 'moment'
import Masthead from '../layouts/components/masthead'

const Trainings = (props) => {
  const trainings = props.data.allContentfulTraining.edges
  return (
    <Layout pageTitle="Trainings">
      <Masthead title="Trainings" image={props.data.allContentfulTrainingsLandingPage.edges[0].node.largeImage.fluid.src}/>
      <div className="container">
        <div dangerouslySetInnerHTML={{__html: props.data.allContentfulTrainingsLandingPage.edges[0].node.leadIn.childMarkdownRemark.html}}/>
        {trainings.map(training => (
          <div style={{marginTop: '1.5rem'}} key={training.node.id}>
            <h3>
              <Link to={`training/${training.node.id}`} className={css`
                text-decoration: underline;
                color: #0085a1;
              `}>
                {training.node.title}
              </Link>
            </h3>
            <h5>{moment(training.node.startDateTime).format('dddd, MMMM D YYYY, h:mm:ss a')}</h5>
            <p>
              <span dangerouslySetInnerHTML={{__html: training.node.location.childMarkdownRemark.html}}/>
            </p>
          </div>

        ))}
      </div>
    </Layout>
  )
}

export default Trainings

export const query = graphql`
{
   
  allContentfulTrainingsLandingPage {
    edges {
      node {
        leadIn {
          childMarkdownRemark {
            html
          }
        }
        largeImage {
          fluid {
            src
          }
        }
      }
    }
  }

  allContentfulTraining(sort:{
    fields:startDateTime
  }) {
    edges {
      node {
        id
        title
        startDateTime
        endDateTime
        rsvpLink
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
}` 