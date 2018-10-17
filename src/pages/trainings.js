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
    <Layout>
      <Masthead title="Trainings" image={props.data.allContentfulTrainingsLandingPage.edges[0].node.largeImage.fluid.src}/>
      <div className="container">
        <h2>Upcoming trainings</h2>
        {trainings.map(training => (
          <div className="card">
            <h3>
              <Link to={`training/${training.node.id}`}>
                {training.node.title}
              </Link>
            </h3>
            <h5>{moment(training.node.startDateTime).format('dddd, MMMM D YYYY, h:mm:ss a')}</h5>
            <p>
              <strong className={css`margin-right: 2rem;`}>Location</strong>
              <span dangerouslySetInnerHTML={{__html: training.node.location.childMarkdownRemark.html}}/>
            </p>
            <div dangerouslySetInnerHTML={{__html: training.node.moreInformation.childMarkdownRemark.html}}/>
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