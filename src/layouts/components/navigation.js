import React from 'react';

import Link from 'gatsby-link'

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let navigation = []
    this.props.navigation.split('\n').map(item => {
      navigation.push(item.split('|'))
    })

    return (
      <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand" href="/">Outdoor Collective</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {navigation.map(item => (
              <li className="nav-item" key={item[1]}>
                <Link className="nav-link" to={item[1]}>{item[0]}</Link>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navigation