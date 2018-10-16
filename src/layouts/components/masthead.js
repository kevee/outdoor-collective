import React from 'react'

const Masthead = (props) => (
  <header className="masthead" style={{backgroundImage: `url('${props.image}`}}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="site-heading">
            <h1>{props.title}</h1>
            <span className="subheading">{props.subheading}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Masthead