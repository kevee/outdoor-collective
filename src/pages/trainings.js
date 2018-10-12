import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layouts/layout.js'
import { css } from 'emotion'
import moment from 'moment'

const Trainings = (props) => {
  const trainings = props.data.allContentfulTrainings.edges
  return (
    <Layout>
      <div className="container">
        <h2>Upcoming trainings</h2>
        {trainings.map(training => (
          <div className="card">
            <h3>{training.node.title}</h3>
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
  allContentfulTrainings(sort:{
    fields:startDateTime
  }) {
    edges {
      node {
        title
        startDateTime
        endDateTime
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