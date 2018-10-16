import React from 'react'
import Navigation from './components/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/clean-blog.min.css'
import { query } from '../pages/trainings';

const Layout = ({ children, data }) => (
  <div>
    <StaticQuery
    query={graphql`
      
    `}
      render={data => (
        <Navigation />
      )}
    />
    
    <div>
      {children}
    </div>
  </div>
)

export default Layout
