import React from 'react'
import Navigation from './components/navigation'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/clean-blog.min.css'

const Layout = ({ children, data }) => (
  <div>
    <Navigation/>
    <div>
      {children}
    </div>
  </div>
)

export default Layout