import React from 'react'
import Layout from '../layouts/layout'
import Masthead from '../layouts/components/masthead'
import moment from 'moment'


const TrainingTemplate = (props) => {
  
  const Rsvp = (props) => {
    if(typeof props.to === 'undefined' || !props.to) {
      return null
    }
    return (
      <>
        <a className="btn btn-primary float-right" href={props.to}>RSVP</a>
      </>
    )
  }
  return (
    <Layout>
      <Masthead title={props.pageContext.training.title}/>
      <div className="container">
        <Rsvp to={props.pageContext.training.rsvpLink}/>
        <div dangerouslySetInnerHTML={{__html : props.pageContext.training.moreInformation.childMarkdownRemark.html}}>
        </div>
        <div className="row">
          <div className="col-md-6">
          <h2>Date &amp; time</h2>
          <p><strong>Pre-trip meeting: </strong>
            {moment(props.pageContext.training.preTripDateTime).format('dddd, MMMM D YYYY, h:mm:ss a')}
          </p>
          <p><strong>Start: </strong>
            {moment(props.pageContext.training.startDateTime).format('dddd, MMMM D YYYY, h:mm:ss a')}
          </p>
          <p><strong>End: </strong>
            {moment(props.pageContext.training.endDateTime).format('dddd, MMMM D YYYY, h:mm:ss a')}
          </p>
          </div>
          <div className="col-md-6">
            <h3>Location</h3>
            <div dangerouslySetInnerHTML={{__html : props.pageContext.training.location.childMarkdownRemark.html}}/>
          </div>
        </div>
        
      </div>
    </Layout>  
    )
  }

export default TrainingTemplate